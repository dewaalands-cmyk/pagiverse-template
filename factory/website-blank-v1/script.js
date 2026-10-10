(() => {
  "use strict";

  const state = { schema: null, data: {} };

  const own = (object, key) =>
    Object.prototype.hasOwnProperty.call(object, key);

  function pathValue(source, path) {
    return String(path)
      .split(".")
      .reduce((value, key) => {
        if (value && typeof value === "object" && own(value, key))
          return value[key];
        return undefined;
      }, source);
  }

  function getValue(path) {
    const configured = pathValue(state.data, path);
    if (configured !== undefined) return configured;
    return state.schema?.fields?.[path]?.default;
  }

  function imageSource(value) {
    const source = typeof value === "string" ? value : value?.src;
    if (!source || /^javascript:/i.test(source)) return "";
    return source;
  }

  function renderBindings() {
    document.querySelectorAll("[data-bind]").forEach((element) => {
      const value = getValue(element.dataset.bind);
      if (value !== undefined) element.textContent = String(value);
    });
    document.querySelectorAll("[data-bind-src]").forEach((image) => {
      const value = getValue(image.dataset.bindSrc);
      const source = imageSource(value);
      if (source) image.src = source;
      const focal = typeof value === "object" ? value.focalPoint : null;
      if (focal) image.style.objectPosition = `${focal.x}% ${focal.y}%`;
    });
    document.querySelectorAll("[data-bind-alt]").forEach((image) => {
      const value = getValue(image.dataset.bindAlt);
      if (value !== undefined) image.alt = String(value);
    });
  }

  function renderCollections() {
    document.querySelectorAll("[data-collection]").forEach((container) => {
      const items = getValue(container.dataset.collection);
      if (!Array.isArray(items)) return;
      const fragment = document.createDocumentFragment();
      items.forEach((item) => {
        const article = document.createElement("article");
        const heading = document.createElement("h3");
        const body = document.createElement("p");
        heading.textContent = String(item.title || item.name || "");
        body.textContent = String(item.description || item.quote || "");
        article.append(heading, body);
        fragment.append(article);
      });
      container.replaceChildren(fragment);
    });
  }

  function applyTheme() {
    const root = document.documentElement;
    ["primary", "accent", "background", "surface", "text"].forEach((token) => {
      const value =
        getValue(`theme.${token}`) ||
        state.schema?.theme?.tokens?.[token]?.default;
      if (value) root.style.setProperty(`--color-${token}`, String(value));
    });
  }

  function updateWhatsappLinks() {
    const phone = String(getValue("contact.whatsapp") || "").replace(/\D/g, "");
    const message = String(getValue("contact.whatsappMessage") || "");
    document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
      link.href = /^\d{8,15}$/.test(phone)
        ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
        : "#contact";
    });
  }

  function render() {
    renderBindings();
    renderCollections();
    applyTheme();
    updateWhatsappLinks();
  }

  function setupNavigation() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const navigation = document.querySelector("[data-navigation]");
    if (!toggle || !navigation) return;
    toggle.addEventListener("click", () => {
      const open = navigation.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  window.addEventListener("message", (event) => {
    if (
      event.source !== window.parent ||
      event.origin !== window.location.origin
    )
      return;
    const payload = event.data;
    if (
      !payload ||
      payload.type !== "pagiverse:config" ||
      payload.templateId !== state.schema?.id
    )
      return;
    state.data =
      payload.configuration && typeof payload.configuration === "object"
        ? payload.configuration
        : {};
    render();
    window.parent.postMessage(
      {
        type: "pagiverse:applied",
        templateId: state.schema.id,
        revision: payload.revision,
      },
      window.location.origin,
    );
  });

  async function init() {
    const response = await fetch("template.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Template schema unavailable");
    state.schema = await response.json();
    setupNavigation();
    render();
    if (window.parent !== window)
      window.parent.postMessage(
        { type: "pagiverse:ready", templateId: state.schema.id },
        window.location.origin,
      );
  }

  init().catch((error) => console.error(error));
})();

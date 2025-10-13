import { defineStore } from "pinia";

// Types pour les notifications
export interface Notification {
  id: string;
  type: "success" | "error" | "warning" | "info";
  message: string;
  duration?: number;
  closable?: boolean;
}

// Types pour les modales
export interface Modal {
  id: string;
  component?: string;
  props?: Record<string, any>;
  onClose?: () => void;
}

export const useUIStore = defineStore("ui", {
  state: () => ({
    // État du menu mobile
    mobileMenuOpen: false,

    // État du loader global
    globalLoading: false,
    loadingMessage: "",

    // Notifications (toasts)
    notifications: [] as Notification[],

    // Modales actives
    modals: [] as Modal[],

    // État du scroll
    isScrolled: false,
    scrollPosition: 0,

    // Sidebar (pour filtres, etc.)
    sidebarOpen: false,

    // Theme (si dark mode dans le futur)
    theme: "light" as "light" | "dark",

    // État de recherche globale
    searchOpen: false,
    searchQuery: "",

    // Contact form sidebar/modal
    contactFormOpen: false,
  }),

  getters: {
    /**
     * Vérifie si au moins une modale est ouverte.
     * @returns {boolean} `true` si au moins une modale est ouverte, sinon `false`.
     */
    hasOpenModal(state): boolean {
      return state.modals.length > 0;
    },

    /**
     * Récupère la modale active (dernière ouverte).
     * @returns {Modal | null} La modale active ou `null` si aucune modale n'est ouverte.
     */
    activeModal(state): Modal | null {
      return state.modals[state.modals.length - 1] || null;
    },

    /**
     * Compte le nombre de notifications actives.
     * @returns {number} Le nombre de notifications actives.
     */
    notificationCount(state): number {
      return state.notifications.length;
    },

    /**
     * Vérifie si un élément d'UI bloque l'interaction (loader ou modale).
     * @returns {boolean} `true` si l'UI est bloquée, sinon `false`.
     */
    isUIBlocking(state): boolean {
      return state.globalLoading || this.hasOpenModal;
    },
  },

  actions: {
    /**
     * Ouvre ou ferme le menu mobile.
     */
    toggleMobileMenu(): void {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      this.setBodyOverflow(this.mobileMenuOpen);
    },

    /**
     * Ferme le menu mobile.
     */
    closeMobileMenu(): void {
      this.mobileMenuOpen = false;
      this.setBodyOverflow(false);
    },

    /**
     * Ouvre le menu mobile.
     */
    openMobileMenu(): void {
      this.mobileMenuOpen = true;
      this.setBodyOverflow(true);
    },

    /**
     * Active le loader global.
     * @param {string} message - Message à afficher pendant le chargement.
     */
    showLoader(message: string = "Chargement..."): void {
      this.globalLoading = true;
      this.loadingMessage = message;
    },

    /**
     * Désactive le loader global.
     */
    hideLoader(): void {
      this.globalLoading = false;
      this.loadingMessage = "";
    },

    /**
     * Ajoute une notification.
     * @param {string} message - Message de la notification.
     * @param {Notification['type']} type - Type de la notification.
     * @param {number} duration - Durée d'affichage en millisecondes.
     * @param {boolean} closable - Indique si la notification peut être fermée manuellement.
     * @returns {string} L'ID de la notification ajoutée.
     */
    addNotification(
      message: string,
      type: Notification["type"] = "info",
      duration: number = 5000,
      closable: boolean = true
    ): string {
      const id = `notification-${Date.now()}-${Math.random()}`;
      const notification: Notification = {
        id,
        type,
        message,
        duration,
        closable,
      };
      this.notifications.push(notification);

      if (duration > 0) {
        setTimeout(() => this.removeNotification(id), duration);
      }

      return id;
    },

    /**
     * Supprime une notification par son ID.
     * @param {string} id - ID de la notification à supprimer.
     */
    removeNotification(id: string): void {
      const index = this.notifications.findIndex((n) => n.id === id);
      if (index !== -1) {
        this.notifications.splice(index, 1);
      }
    },

    /**
     * Supprime toutes les notifications.
     */
    clearNotifications(): void {
      this.notifications = [];
    },

    /**
     * Raccourci pour ajouter une notification de succès.
     * @param {string} message - Message de la notification.
     * @param {number} duration - Durée d'affichage en millisecondes.
     * @returns {string} L'ID de la notification ajoutée.
     */
    notifySuccess(message: string, duration: number = 5000): string {
      return this.addNotification(message, "success", duration);
    },

    /**
     * Raccourci pour ajouter une notification d'erreur.
     * @param {string} message - Message de la notification.
     * @param {number} duration - Durée d'affichage en millisecondes.
     * @returns {string} L'ID de la notification ajoutée.
     */
    notifyError(message: string, duration: number = 7000): string {
      return this.addNotification(message, "error", duration);
    },

    /**
     * Raccourci pour ajouter une notification d'avertissement.
     * @param {string} message - Message de la notification.
     * @param {number} duration - Durée d'affichage en millisecondes.
     * @returns {string} L'ID de la notification ajoutée.
     */
    notifyWarning(message: string, duration: number = 6000): string {
      return this.addNotification(message, "warning", duration);
    },

    /**
     * Raccourci pour ajouter une notification d'information.
     * @param {string} message - Message de la notification.
     * @param {number} duration - Durée d'affichage en millisecondes.
     * @returns {string} L'ID de la notification ajoutée.
     */
    notifyInfo(message: string, duration: number = 5000): string {
      return this.addNotification(message, "info", duration);
    },

    /**
     * Ouvre une modale.
     * @param {string} component - Nom du composant à afficher dans la modale.
     * @param {Record<string, any>} props - Props à passer au composant.
     * @param {() => void} onClose - Callback appelé lors de la fermeture de la modale.
     * @returns {string} L'ID de la modale ouverte.
     */
    openModal(
      component?: string,
      props?: Record<string, any>,
      onClose?: () => void
    ): string {
      const id = `modal-${Date.now()}`;
      this.modals.push({ id, component, props, onClose });
      this.setBodyOverflow(true);
      return id;
    },

    /**
     * Ferme une modale par son ID.
     * @param {string} id - ID de la modale à fermer.
     */
    closeModal(id?: string): void {
      if (id) {
        const index = this.modals.findIndex((m) => m.id === id);
        if (index !== -1) {
          const modal = this.modals[index];
          modal?.onClose?.();
          this.modals.splice(index, 1);
        }
      } else {
        // ✅ Vérification explicite que `modals` n'est pas vide
        if (this.modals.length > 0) {
          const modal = this.modals.pop();
          modal?.onClose?.();
        }
      }

      if (this.modals.length === 0) {
        this.setBodyOverflow(false);
      }
    },
    /**
     * Ferme toutes les modales.
     */
    closeAllModals(): void {
      this.modals.forEach((modal) => modal.onClose?.());
      this.modals = [];
      this.setBodyOverflow(false);
    },

    /**
     * Met à jour la position de scroll.
     * @param {number} position - Position actuelle du scroll.
     */
    updateScrollPosition(position: number): void {
      this.scrollPosition = position;
      this.isScrolled = position > 100;
    },

    /**
     * Ouvre ou ferme la sidebar.
     */
    toggleSidebar(): void {
      this.sidebarOpen = !this.sidebarOpen;
    },

    /**
     * Ferme la sidebar.
     */
    closeSidebar(): void {
      this.sidebarOpen = false;
    },

    /**
     * Ouvre la sidebar.
     */
    openSidebar(): void {
      this.sidebarOpen = true;
    },

    /**
     * Ouvre ou ferme la recherche globale.
     */
    toggleSearch(): void {
      this.searchOpen = !this.searchOpen;
      if (!this.searchOpen) {
        this.searchQuery = "";
      }
    },

    /**
     * Ouvre la recherche globale.
     */
    openSearch(): void {
      this.searchOpen = true;
    },

    /**
     * Ferme la recherche globale.
     */
    closeSearch(): void {
      this.searchOpen = false;
      this.searchQuery = "";
    },

    /**
     * Définit la requête de recherche.
     * @param {string} query - Requête de recherche.
     */
    setSearchQuery(query: string): void {
      this.searchQuery = query;
    },

    /**
     * Ouvre ou ferme le formulaire de contact.
     */
    toggleContactForm(): void {
      this.contactFormOpen = !this.contactFormOpen;
    },

    /**
     * Ouvre le formulaire de contact.
     */
    openContactForm(): void {
      this.contactFormOpen = true;
    },

    /**
     * Ferme le formulaire de contact.
     */
    closeContactForm(): void {
      this.contactFormOpen = false;
    },

    /**
     * Définit le thème (light/dark).
     * @param {'light' | 'dark'} theme - Thème à appliquer.
     */
    setTheme(theme: "light" | "dark"): void {
      this.theme = theme;
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("modeli-theme", theme);
    },

    /**
     * Bascule entre les thèmes light et dark.
     */
    toggleTheme(): void {
      this.setTheme(this.theme === "light" ? "dark" : "light");
    },

    /**
     * Initialise le thème depuis localStorage.
     */
    initTheme(): void {
      const savedTheme = localStorage.getItem("modeli-theme") as
        | "light"
        | "dark"
        | null;
      if (savedTheme) {
        this.setTheme(savedTheme);
      }
    },

    /**
     * Réinitialise l'état UI complet.
     */
    reset(): void {
      this.closeMobileMenu();
      this.hideLoader();
      this.clearNotifications();
      this.closeAllModals();
      this.closeSidebar();
      this.closeSearch();
      this.closeContactForm();
    },

    /**
     * Définit l'état du overflow du body.
     * @param {boolean} hidden - Si `true`, désactive le scroll.
     */
    setBodyOverflow(hidden: boolean): void {
      document.body.style.overflow = hidden ? "hidden" : "";
    },
  },
});

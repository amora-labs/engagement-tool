var Sidebar = {
    menuAction: function(ev) {
        var route = ev.target.getAttribute("data-route");
        console.log("menu action", route);
        state.drawerOpen = false;
        setTimeout(function() {
            m.route.set(route);
        }, 300);
        
    },
    view: function(vnode) {
        return m("section[data-type=sidebar]", [
            m("header", [
                m("h1", "Menu")
            ]),
            m("nav", [
                m("h2", "Ações via Email"),
                m("ul", {onclick: this.menuAction}, [
                    m("li", [
                        m("a[data-route=/share-topics-by-email]", "Enviar tópicos por email")
                    ]),
                    m("li", [
                        m("a[data-route=/share-contact-by-email]", "Enviar contato por email")
                    ])
                ]),
                m("h2", "Ações via QR Code"),
                m("ul", {onclick: this.menuAction}, [
                    m("li", [
                        m("a[data-route=/share-contact-by-qr-code]", "Compartilhar contato via QR Code")
                    ])
                ]),
                m("h2", "Gerenciamento"),
                m("ul", {onclick: this.menuAction}, [
                    m("li", [
                        m("a[data-route=/info]", "Informaçoes pessoais de contato")
                    ]),
                     m("li", [
                        m("a[data-route=/analytics]", "Painel de métricas")
                    ]),
                     m("li", [
                        m("a[data-route=/export]", "Exportar dados de interação")
                    ]),
                    m("li", [
                        m("a[data-route=/about]", "Sobre esse webapp")
                    ])
                ])
            ])

        ])
    }
}

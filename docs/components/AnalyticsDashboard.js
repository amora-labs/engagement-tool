var AnalyticsDashboard = {
    downloadJournal: function(vnode) {
        analytics.downloadJournal();
    },
    eraseJournal: function() {
        console.log("Operação perigosa...");
        var p = confirm("Tem certeza que quer apagar os dados de interação?");

        if (p) {
            analytics.eraseJournal();
        }
    },
    summary: function() {
        var journal = analytics.getEntries();
        return m(".center", [
            m("h2", "Total de interações"),
            m("p.analytics-large", journal.length),
            m("h2", "Emails enviados"),
            m("p.analytics-large", analytics.countEmails()),
            m("h2", "Contatos enviados"),
            m("p.analytics-large", (analytics.countAction("share-contact-by-email") + analytics.countAction("share-contact-by-qr-code"))),
        ]);
    },
    topicsBreakout: function() {
        var journal = analytics.getEntries();
        var totals = {};
        var entries = analytics.filterByAction("share-topics-by-email");
        var entry = {};
        var kpis = [];
        var retVal = [
            m("h2.separator", "Divisão por tópicos")
        ];

        // Computing totals for each KPI
        for (var i = 0; i < entries.length; i++) {
            entry = entries[i];
            entry.data.kpis.map(function(kpi) {
                if (typeof totals[kpi] == "undefined") {
                    totals[kpi] = 1;
                } else {
                    totals[kpi]++;
                }
            })
        }

        // Display totals
        for (var kpi in totals) {
            if( totals.hasOwnProperty(kpi) ) {
                retVal.push(m("h2", kpi));
                retVal.push(m("p.analytics-large", totals[kpi]));
            } 
        }    

        return m(".center", retVal);
    },
    view: function(vnode) {
        return [
            m(Sidebar),
            m("section#drawer[role=region]", {class: state.drawerOpen ? "drawer-open" : "" }, [
                m(Header),
                m("article.content.scrollable.header", [
                    m("h2.separator", "Painel de Métricas"),
                    this.summary(),
                    this.topicsBreakout(),
                    m("br"),
                    m("button.recommend.go-subscribe-action", {onclick: this.downloadJournal},"Baixar dados de interação JSON"),
                    m("button.danger.go-subscribe-action", {onclick: this.eraseJournal},"Apagar dados de interação")
                ])
            ])
        ]} 
};

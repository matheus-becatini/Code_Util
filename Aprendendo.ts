type EstadosGerais = 'neutro' | 'mal-humorado' | 'feliz';

type Humor = {
    estadoGeral: EstadosGerais;
    xingamentos: string[]
    sorrindo: boolean
}

const HumorInicial = {
    estadoGeral: 'neutro',
    sorrindo: false,
    xingamentos: []
} as Readonly<Humor>

enum TiposEventos {
    Quarentena,
    CaiuSalario,
    Indigestao
}

function surtarCovid() {
    return {
        tipo: TiposEventos.Quarentena
    } as const;
} 

function CairSalario(sorrindo: boolean) {
    return{
        tipo: TiposEventos.CaiuSalario,
        humor: { sorrindo }
    } as const
}

function comerBifeFigado (xingamentos: string[], sorrindo: boolean){
    return {
        tipo: TiposEventos.Indigestao,
        humor: {xingamentos, sorrindo}
    } as const
}

type Evento = ReturnType<typeof surtarCovid | typeof CairSalario | typeof comerBifeFigado>


function atualizarHumor(humorAtual: Humor, evento: Evento): Humor {
    switch (evento.tipo) {
        case TiposEventos.CaiuSalario:
            return {
                ...humorAtual,
                sorrindo: evento.humor.sorrindo
            }
        case TiposEventos.Indigestao:
            return {
                ...humorAtual,
                xingamentos: [...evento.humor.xingamentos],
                sorrindo: evento.humor.sorrindo
            }
        case TiposEventos.Quarentena:
            return{
                ...humorAtual
            }
    }
}

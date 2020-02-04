function calculatePokemonRegion(id) {
    switch(true) {
        case (id <= 151): return 'Generation I'
        case (id >= 152 && id <= 251): return 'Generation II'
        case (id >= 252 && id <= 386): return 'Generation III'
        case (id >= 387 && id <= 493): return 'Generation IV'
        case (id >= 494 && id <= 649): return 'Generation V'
        case (id >= 650 && id <= 721): return 'Generation VI'
        case (id >= 722 && id <= 809): return 'Generation VII'
        case (id >= 810 && id <= 896): return 'Generation VIII'
        default: return 'Unknown'
    }
}

export default calculatePokemonRegion

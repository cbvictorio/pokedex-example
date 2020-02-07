import { 
    COLOR_NORMAL,
    COLOR_FIRE,
    COLOR_FIGHT,
    COLOR_WATER,
    COLOR_FLYING,
    COLOR_GRASS,
    COLOR_POISON,
    COLOR_ELECTRIC,
    COLOR_GROUND,
    COLOR_PSYCHIC,
    COLOR_ROCK,
    COLOR_ICE,
    COLOR_BUG,
    COLOR_DRAGON,
    COLOR_STEEL,
    COLOR_FAIRY,
    COLOR_GHOST,
    COLOR_DARK,
    COLOR_RANDOM 
} from '@/utils/constants'

function colorPicker(color) {
    switch(color) {
        case 'normal': return COLOR_NORMAL
        case 'fire': return COLOR_FIRE
        case 'fight': return COLOR_FIGHT
        case 'water': return COLOR_WATER
        case 'flying': return COLOR_FLYING
        case 'grass': return COLOR_GRASS
        case 'poison': return COLOR_POISON
        case 'electric': return COLOR_ELECTRIC
        case 'ground': return COLOR_GROUND
        case 'psychic': return COLOR_PSYCHIC
        case 'rock': return COLOR_ROCK
        case 'ice': return COLOR_ICE
        case 'bug': return COLOR_BUG
        case 'dragon': return COLOR_DRAGON
        case 'steel': return COLOR_STEEL
        case 'fairy': return COLOR_FAIRY
        case 'ghost': return COLOR_GHOST
        case 'dark': return COLOR_DARK
        default: return COLOR_RANDOM
    }
}

export default colorPicker

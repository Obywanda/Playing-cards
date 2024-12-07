export enum MonsterType {
    PLANT = "plant",
    ELECTRIC = "electric",
    FIRE = "fire",
    WATER = "WATER"
}

// interface 
export interface IMonsterProperties {
    imageURL: string;
    color: string;
}

export const MonsterTypeProperties: {[key: string]: IMonsterProperties} ={
    [MonsterType.PLANT]:{
        imageURL: '/img/plant.png',
        color: 'rgba(135, 255, 124)'
    },
    [MonsterType.ELECTRIC]:{
        imageURL: '/img/electric.png',
        color: 'rgba(255, 255, 104)'
    },
    [MonsterType.FIRE]:{
        imageURL: '/img/fire.png',
        color: 'rgba(255, 104, 104)'
    },
    [MonsterType.WATER]:{
        imageURL: '/img/water.png',
        color: 'rgba(118, 235, 124)'
    }
}
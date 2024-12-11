
import { MonsterType } from "../utils/monster.utils";

export class Monster {
    //Création des attribues pour le composant Playing-card
    name: string = "My Monster";
    image: string = "/img/pik.png";
    type: MonsterType = MonsterType.ELECTRIC;
    hp: number = 40;
    figureCaption: string = "N°001 Monster";

    attackName: string = "Geo Impact";
    attackStrenght: number = 60;
    attacksDescription: string = "This is a long description of a monster attack. Probably something to do with electricity"
}
const originCreate = create;
create = function(obj, x, y, mapName, dir) {
    const object = originCreate(obj, x, y, mapName, dir);
    const originAttack = object.attack;
    object.attack = async function(num) {
        for (let i = 0; i < num; i++) {
            await originAttack();
        }
    }
    return object;
}
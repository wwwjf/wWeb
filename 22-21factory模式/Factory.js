function Factory() {

}

Factory.create = function (type) {
    switch (type) {
        case 'normal':
            return new Normal();
        case 'gunCarrier':
            return new GunCarrier();
        case 'strong':
            return new Strong();
        default:
            break
    }
};
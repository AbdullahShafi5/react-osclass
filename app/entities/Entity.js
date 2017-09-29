


export default class Entity {

    constructor() {
        this.definition = {};
        this.attributes_definition = {};
        this.data = {
            attributes: {
                real_state: {}
            }
        };
    }

    _load(data, attributes = null) {
        let self = this;
        let fields = [];
        let keys = [];

        if (!attributes) {
            fields = Object.values(this.definition);
            keys = Object.keys(this.definition);
        } else {
            fields = Object.values(this.attributes_definition[attributes]);
            keys = Object.keys(this.attributes_definition[attributes]);
        }

        keys.map((key, index) => {

            let entry = data.hasOwnProperty(fields[index]) ? data[fields[index]] : null;

            if(!attributes) {
                self.data[key] = entry;
            } else {
                self.data.attributes[attributes][key] = entry;
            }
        });
    }

    get(key) {
        if(this.definition.hasOwnProperty(key)){
            return this[key];
        }
    }
}
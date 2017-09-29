import Entity from './Entity'


export default class ItemEntity extends Entity {

    constructor(data) {
        super();

        this.definition = {
            id                  : "pk_i_id",
            user_id             : "fk_i_user_id",
            category_id         : "fk_i_category_id",
            pub_date            : "dt_pub_date",
            mod_date            : "dt_mod_date",
            price               : "i_price",
            currency_code       : "fk_c_currency_code",
            contact_name        : "s_contact_name",
            contact_email       : "s_contact_email",
            ip                  : "s_ip",
            premium             : "b_premium",
            enabled             : "b_enabled",
            active              : "b_active",
            spam                : "b_spam",
            secret              : "s_secret",
            show_email          : "b_show_email",
            expiration          : "dt_expiration",
            user_name           : "s_user_name",
            locale              : "locale",
            locale_code         : "",
            title               : "s_title",
            description         : "s_description",
            item_id             : "fk_i_item_id",
            country_code        : "fk_c_country_code",
            country             : "s_country",
            address             : "s_address",
            zip_code            : "s_zip",
            region_id           : "fk_i_region_id",
            region              : "s_region",
            city_id             : "fk_i_city_id",
            city                : "s_city",
            city_area_id        : "fk_i_city_area_id",
            city_area           : "s_city_area",
            coord_lat           : "d_coord_lat",
            coord_long          : "d_coord_long",
            category_name       : "s_category_name",
            num_views           : "i_num_views",
            num_spam            : "i_num_spam",
            num_bad_classified  : "i_num_bad_classified",
            num_repeated        : "i_num_repeated",
            num_offensive       : "i_num_offensive",
            num_expired         : "i_num_expired",
            num_premium_views   : "i_num_premium_views",
            resources           : "resources"
        };

        this.attributes_definition = {
            real_state: {
                type                : "type",
                property_type       : "property_type",
                rooms               : "rooms",
                bathrooms           : "bathrooms",
                status              : "status",
                square_meters       : "square_meters",
                plot_area           : "plot_area",
                floors              : "floors",
                year                : "year",
                heating             : "b_heating",
                air_condition       : "b_air_condition",
                elevator            : "b_elevator",
                terrace             : "b_terrace",
                parking             : "b_parking",
                furnished           : "b_furnished",
                new                 : "b_new",
                by_owner            : "b_by_owner"
            }
        };

        this._load(data);

        if(data.hasOwnProperty('attributes')) {
            this._load(data.attributes.real_state, 'real_state');
        }

        this.data.full_address = [this.data.address, this.data.city, this.data.region, this.data.zip_code].join(', ');

        this.data.formatted_price = parseInt(this.data.price) / 1000000;
    }
}
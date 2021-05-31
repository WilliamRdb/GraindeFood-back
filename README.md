# projet-grainedefood-back

    "user_id" integer NOT NULL REFERENCES "user" ("id"),
    "promo_id" integer NOT NULL REFERENCES "promo" ("id")


        created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false
    },


        timestamps:true
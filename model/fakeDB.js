const fakeDB = {
    fakeDB: [],
    fakeDBHome: [],
    logo: "img/spoon&fork.png",

    init() {
        // Meal Packages
        this.fakeDB.push({img: "", title: "Muscle Gain", price: 200.99, meals: 10, category: "Diet", 
            details: "High protein with calorie package that supports muscle gains.", top_package: false});
        this.fakeDB.push({img: "", title: "Weight Loss", price: 150.99, meals: 10, category: "Diet", 
            details: "High protein with low-calorie meals with needed nutrients that support weight loss.",top_package: false});
        this.fakeDB.push({img: "", title: "Fat Loss", price: 170.99, meals: 10, category: "Vegan",
            details: "Low carb, high nutrient package that helps burn fat.", top_package: false});
        this.fakeDB.push({img: "", title: "Keto", price: 150.99, meals: 10, category: "Vegan", 
            details: "High fat, low carb, and moderate protein to support your keto diet.", top_package: false});

        // Top Meals
        this.fakeDBHome.push({img: "", title: "Chicken Teriyaki", price: 11.99});
        this.fakeDBHome.push({img: "", title: "Garlic Butter Salmon", price: 11.99});
        this.fakeDBHome.push({img: "", title: "Keto Cheese Steak", price: 15.99});
        this.fakeDBHome.push({img: "", title: "Beef Gratin", price: 10.99});
    },

    getFakeDB() {
        return this.fakeDB;
    },

    getLogo() {
        return this.logo;
    }
}
fakeDB.init();
module.exports = fakeDB;
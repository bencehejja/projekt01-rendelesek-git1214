const orders = [

    {
        id: 1,
        pizza: "Hawaii",
        extra: "",
        ital: "Pepsi zero",
        ar: 2000,
        kep: "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    
    {
        id: 2,
        pizza: "Songoku",
        extra: "",
        ital: "",
        ar: 1750,
        kep: "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 3,
        pizza: "Husimado",
        extra: "csipos paprika",
        ital: "Asvanyviz",
        ar: 2500,
        kep: "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 4,
        pizza: "Pikans",
        extra: "",
        ital: "Nestea",
        ar: 1900,
        kep: "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 5,
        pizza: "Korfu pizza",
        extra: "Olivabogyo",
        ital: "Pepsi",
        ar: 2340,
        kep: "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 6,
        pizza: "Bolognai",
        extra: "",
        ital: "",
        ar: 1700,
        kep: "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },

];

const result = document.getElementById("result");

let output = "";

orders.map(pizza =>{

    output += `
    
        <div class="order">
        
            <div>
            
                <img src="${pizza.kep} alt="${pizza.pizza}" />

            </div>

            <div>
            
                <h3>${pizza.pizza}</h3>
                <hr>
                <h4>${pizza.ar} Ft</h4>
                <p>Extra: ${pizza.extra}</p>
                <p>Ital: ${pizza.ital}</p>
            
            </div>

        </div>

    `;

})

result.innerHTML = output;

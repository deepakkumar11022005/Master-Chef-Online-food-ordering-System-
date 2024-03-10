
let show_menu = 0;
document.getElementById("menu_button_id").addEventListener("click", () => {
    if (show_menu == 0) {
        document.getElementById("Menu_close_id").innerHTML = "Close"
        document.getElementById("menu_button_id").style.backgroundColor = "black"
        // document.getElementById("fork_icon_id").style.display="none"
        document.getElementById("menu_list_for_md_id").style.display = "block";
        show_menu = 1;
    }
    else {
        document.getElementById("Menu_close_id").innerHTML = "Menu"
        document.getElementById("menu_button_id").style.backgroundColor = "rgb(48, 47, 47)"
        // document.getElementById("fork_icon_id").display="none"
        document.getElementById("menu_list_for_md_id").style.display = "none"
        show_menu = 0
    }

})

const mealMenuItem1 = document.getElementById('menu_list_id1');
window.addEventListener('scroll', () => {
    const mealSectionRect = document.getElementById('menu_items_recommended_id').getBoundingClientRect();
    if (mealSectionRect.top >= 0 && mealSectionRect.top <= window.innerHeight) {
        mealMenuItem1.classList.add('highlighted');
    } else {
        mealMenuItem1.classList.remove('highlighted');
    }
});
const mealMenuItem2 = document.getElementById('menu_list_id2');
window.addEventListener('scroll', () => {
    const mealSectionRect = document.getElementById('comboo_id').getBoundingClientRect();
    if (mealSectionRect.top >= 0 && mealSectionRect.top <= window.innerHeight) {
        mealMenuItem2.classList.add('highlighted');
    } else {
        mealMenuItem2.classList.remove('highlighted');
    }
});


const mealMenuItem3 = document.getElementById('menu_list_id3');
window.addEventListener('scroll', () => {
    const mealSectionRect = document.getElementById('meal_id').getBoundingClientRect();
    if (mealSectionRect.top >= 0 && mealSectionRect.top <= window.innerHeight) {
        mealMenuItem3.classList.add('highlighted');
    } else {
        mealMenuItem3.classList.remove('highlighted');
    }
});
const mealMenuItem4 = document.getElementById('menu_list_id4');
window.addEventListener('scroll', () => {
    const mealSectionRect = document.getElementById('soup_id').getBoundingClientRect();
    if (mealSectionRect.top >= 0 && mealSectionRect.top <= window.innerHeight) {
        mealMenuItem4.classList.add('highlighted');
    } else {
        mealMenuItem4.classList.remove('highlighted');
    }
});
const mealMenuItem5 = document.getElementById('menu_list_id5');
window.addEventListener('scroll', () => {
    const mealSectionRect = document.getElementById('starter_id').getBoundingClientRect();
    if (mealSectionRect.top >= 0 && mealSectionRect.top <= window.innerHeight) {
        mealMenuItem5.classList.add('highlighted');
    } else {
        mealMenuItem5.classList.remove('highlighted');
    }
});
const mealMenuItem6 = document.getElementById('menu_list_id6');
window.addEventListener('scroll', () => {
    const mealSectionRect = document.getElementById('gravy_id').getBoundingClientRect();
    if (mealSectionRect.top >= 0 && mealSectionRect.top <= window.innerHeight) {
        mealMenuItem6.classList.add('highlighted');
    } else {
        mealMenuItem6.classList.remove('highlighted');
    }
});
const mealMenuItem7 = document.getElementById('menu_list_id7');
window.addEventListener('scroll', () => {
    const mealSectionRect = document.getElementById('briyani_id').getBoundingClientRect();
    if (mealSectionRect.top >= 0 && mealSectionRect.top <= window.innerHeight) {
        mealMenuItem7.classList.add('highlighted');
    } else {
        mealMenuItem7.classList.remove('highlighted');
    }
});
const mealMenuItem8 = document.getElementById('menu_list_id8');
window.addEventListener('scroll', () => {
    const mealSectionRect = document.getElementById('kebab_id').getBoundingClientRect();
    if (mealSectionRect.top >= 0 && mealSectionRect.top <= window.innerHeight) {
        mealMenuItem8.classList.add('highlighted');
    } else {
        mealMenuItem8.classList.remove('highlighted');
    }
});
const mealMenuItem9 = document.getElementById('menu_list_id9');
window.addEventListener('scroll', () => {
    const mealSectionRect = document.getElementById('dessert_id').getBoundingClientRect();
    if (mealSectionRect.top >= 0 && mealSectionRect.top <= window.innerHeight) {
        mealMenuItem9.classList.add('highlighted');
    } else {
        mealMenuItem9.classList.remove('highlighted');
    }
});
const mealMenuItem10 = document.getElementById('menu_list_id10');
window.addEventListener('scroll', () => {
    const mealSectionRect = document.getElementById('beverages_id').getBoundingClientRect();
    if (mealSectionRect.top >= 0 && mealSectionRect.top <= window.innerHeight) {
        mealMenuItem10.classList.add('highlighted');
    } else {
        mealMenuItem10.classList.remove('highlighted');
    }
});


// document.getElementById("menu_list_a1").addEventListener("click",()=>{
//     document.getElementById("menu_list_for_md_id").style.display="none";
//     document.getElementById("menu_button_id").style.backgroundColor="red"
//     document.getElementById("Menu_close_id").innerHTML="Menu"
//     document.getElementById("height_manage1").scrollIntoView();
// })



let cart_items = [];
let cart_items_total_count = 0;
let cart_items_total_amount=0;


let item_des = "Lorem ipsum dolor sit amet consectetur a  sapiente laudan"
//  let item_des="Lorem ipsum dolor sit amet consectetur a Aliquam sapiente laudantiu"                img  link                                                                                  item name 1   item des2  rat 3   item count 4  id 5  already removed 6 price 7
let recommended_for_you = [
    ["https://images.unsplash.com/photo-1539735257177-0d3949225f96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhdGUlMjBvZiUyMGZvb2R8ZW58MHx8MHx8fDA%3D", "Chicken Salad", item_des, 5, 0, 0, 0,70],
    ["https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhbHxlbnwwfHwwfHx8MA%3D%3D", "Salmon Fry", item_des, 5, 0, 1, 0,120],
    ["https://images.unsplash.com/photo-1541013406133-94ed77ee8ba8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXRlJTIwb2YlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D", "Veg - Noodles", item_des, 5, 0, 2, 0,60],
    ["https://images.unsplash.com/photo-1537543525161-3c93d0b61d7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYXRlJTIwb2YlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D", "Chichen Meal", item_des, 5, 0, 3, 0,100],
    ["https://images.unsplash.com/photo-1602253057119-44d745d9b860?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzaHxlbnwwfDB8MHx8fDA%3D", "chicken Thandoori", item_des, 5, 0, 4, 0,120],
    ["https://images.unsplash.com/photo-1519624213695-6819a985fb0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBsYXRlJTIwb2YlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D", "Mutton Curry", item_des, 5, 0, 5, 0,180],
    ["https://images.unsplash.com/photo-1528738064262-9f834cbdfda1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhdGUlMjBvZiUyMGZvb2R8ZW58MHwwfDB8fHww", "Pasta", item_des, 5, 0, 6, 0,40],
    ["https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHBsYXRlJTIwb2YlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D", "Cup Cake", item_des, 5, 0, 7, 0,20]
];
for (let i = 0; i < recommended_for_you.length; i++) {
    let ratingStars = '';
    for (let j = 0; j < 5; j++) {
        if (j < recommended_for_you[i][3]) {
            ratingStars += '<span style="font-size: 45%; color: orange">&#9733;</span> ';   // filled star with orange color
            ratingStars += ' '
        } else {
            ratingStars += '<span style="font-size: 45%;color: gray">&#9733;</span>';       //empty star
            ratingStars += ' '

        }
    }
    let node = document.createElement("div");
    node.classList.add("item")
    node.innerHTML = `
   
        <div class="item_img">
        <div class="add_to_cart">
        <span id="remove_item_recommended_for_you${i}" class="remove_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
      </svg></span>
        <span id="item_in_cart_recommended_for_you${i}" class="item_in_cart"><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg><span id="cart_count${i}" class="cart_count">0</span></span>
        <span id="add_item_recommended_for_you${i}" class="add_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
      </svg></span>
    </div>
        <img src="${recommended_for_you[i][0]}" class="rounded" alt="${recommended_for_you[i][1]}"
        height="100%" width="95%">
</div>
        <div class="item_details">
            <div class="item_name">
                ${recommended_for_you[i][1]}
            </div>
            <div class="item_description">
                ${recommended_for_you[i][2]}  &#x20B9;
                ${recommended_for_you[i][7]}
            </div>
            <div class="item_rating">
                ${ratingStars}
            </div>
        </div>
    `;
    document.getElementById("menu_items_recommended_id").appendChild(node);
}


for (let i = 0; i < recommended_for_you.length; i++) {
    let recommended_for_you_item_count = 0;
    document.getElementById(`remove_item_recommended_for_you${i}`).addEventListener("click", () => {
        cart_items_total_amount-=recommended_for_you[i][7]
        if (cart_items_total_count == 0) {
            document.getElementById("my_cart_id").style.display = "none"

        }
        if (recommended_for_you[i][4] > 0) {
            if (recommended_for_you_item_count > 0) {
                recommended_for_you_item_count--;

                cart_items_total_count--;
                if (recommended_for_you[i][4] > 1) {
                    recommended_for_you[i][4]--;
                    // cart_items[recommended_for_you[i][4]][4]--;
                    // cart_items_total_count--;
                    document.getElementById(`my_cart_item_count_id${i}`).innerHTML = recommended_for_you[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)
                  
                    document.getElementById(`cart_count${i}`).innerHTML = recommended_for_you[i][4];
                }
                else {
                    recommended_for_you[i][4]--;
                    cart_items.pop();
                    document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${i}`))
                    // document.getElementById(`my_cart_item_count_id${i}`).innerHTML = recommended_for_you[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)

                    document.getElementById(`cart_count${i}`).innerHTML = recommended_for_you[i][4];
                }

            }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
            document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
            document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
        }
    })
    document.getElementById(`add_item_recommended_for_you${i}`).addEventListener("click", () => {
        cart_items_total_amount+=recommended_for_you[i][7];
        recommended_for_you_item_count++;
        // console.log(cart_items)
        let i_can_add = 0;

        //    console.log(recommended_for_you_cart_items);
        for (let check = 0; check < cart_items.length; check++) {
            if (cart_items[check][1] === recommended_for_you[i][1]) {
                i_can_add = 1;
                cart_items_total_count++;
                recommended_for_you[i][4]++;
                document.getElementById(`my_cart_item_count_id${i}`).innerHTML = recommended_for_you[i][4];
                //  console.log( recommended_for_you[i][4])
            }


        }
        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        if (i_can_add == 0) {
            cart_items_total_count++;
            cart_items.push(recommended_for_you[i]);
            let user_added_cart = document.createElement("div")
            user_added_cart.classList.add("my_cart_item");
            user_added_cart.setAttribute("id", `my_cart_item_id${i}`)
            recommended_for_you[i][4]++;

            user_added_cart.innerHTML = `
  
            <div class="my_cart_food_info">
                <div class="my_cart_food_img">
                    <img src="${recommended_for_you[i][0]}" alt="${recommended_for_you[i][1]}"
                        height="50px" width="100px" class="rounded">
                </div>
                <div class="my_cart_food_details">
                    <span id="my_cart_food_item_name">  ${recommended_for_you[i][1]}</span>
                    <span id="my_cart_food_item_price">&#x20B9;  ${recommended_for_you[i][7] } each</span>
                </div>
            </div>
            <div class="my_cart_add_remove_item_cancel_btn">
                
                <div class="add_remove_my_cart_food_item">
                    <span class="my_cart_remove_item" id="my_cart_remove_item_id${i}"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem" height="1.5rem"
                            fill="currentColor" class="bi bi-dash"
                            viewBox="0 0 16 16">
                            <path
                                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg></span></span>
                    <span class="my_cart_item_count" id="my_cart_item_count_id${i}">${recommended_for_you[i][4]}</span>
                    <span class="my_cart_add_item" id="my_cart_add_item_id${i}"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem" height="1.5rem"
                            fill="currentColor" class="bi bi-plus"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg></span>
                </div>
            
     
    </div>`
            // document.getElementById('user_added_to_cart').appendChild(user_added_cart);

            // console.log(i)
            // console.log(cart_items.length)
            document.getElementById("user_added_cart_id").appendChild(user_added_cart);
        }


        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        document.getElementById(`cart_count${i}`).innerHTML = recommended_for_you[i][4];
        document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
        document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
        document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
    })
}

// let cart_item_count=Number(document.getElementById("cart_item_count").ariaValueMax);
// console.log(cart_item_count)
// if(cart_item_count<=0)
// {
//     document.getElementById("cart_item_count").style.display="none"
// }
// else{
//     document.getElementById("cart_item_count").style.display="block"
// }


let meal = [
    ["https://images.unsplash.com/photo-1539735257177-0d3949225f96?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhdGUlMjBvZiUyMGZvb2R8ZW58MHwwfDB8fHww", "Veg Salad", item_des, 5, 0, 0, 0,60],
    ["https://images.unsplash.com/photo-1537543525161-3c93d0b61d7a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYXRlJTIwb2YlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D", "Chicken Meal", item_des, 5, 0, 1, 0,100],
    ["https://images.unsplash.com/photo-1539586345401-51d5bfba7ac0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBsYXRlJTIwb2YlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D", "Prawn Noodles", item_des, 5, 0, 2, 0,110],
    ["https://images.unsplash.com/photo-1582576163090-09d3b6f8a969?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBsYXRlJTIwb2YlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D", "Sanaa Rava", item_des, 5, 0, 3, 0,40],
    ["https://images.unsplash.com/photo-1519918706225-f47735b82d0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHBsYXRlJTIwb2YlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D", "Fruit Salad", item_des, 5, 0, 4, 0,80],
    ["https://images.unsplash.com/photo-1528738064262-9f834cbdfda1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhdGUlMjBvZiUyMGZvb2R8ZW58MHwwfDB8fHww", "Pasta", item_des, 5, 0, 5, 0,50],
    ["https://images.unsplash.com/photo-1504973960431-1c467e159aa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHBsYXRlJTIwb2YlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D", "Beep Curry", item_des, 4, 0, 6, 0,140],
    ["https://images.unsplash.com/photo-1490990813269-10586274747f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxwbGF0ZSUyMG9mJTIwZm9vZHxlbnwwfDB8MHx8fDA%3D", "Fried Rice", item_des, 4, 0, 7, 0,70]
    , ["https://images.unsplash.com/photo-1530524428108-f983ca74ad0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxwbGF0ZSUyMG9mJTIwZm9vZHxlbnwwfDB8MHx8fDA%3D", "Chicken Burger", item_des, 3, 0, 8, 0,120],
    ["https://images.unsplash.com/photo-1511969193364-49214445cf91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxwbGF0ZSUyMG9mJTIwZm9vZHxlbnwwfDB8MHx8fDA%3D", "Veg Burger", item_des, 3, 0, 9, 0,100],
    ["https://images.unsplash.com/photo-1524859330668-c357331384f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBsYXRlJTIwb2YlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D", "Mushroom Curry", item_des, 3, 0, 10, 0,80]
]

for (let i = 0; i < meal.length; i++) {
    let ratingStars = '';
    for (let j = 0; j < 5; j++) {
        if (j < meal[i][3]) {
            ratingStars += '<span style="font-size: 45%; color: orange">&#9733;</span> ';   // filled star with orange color
            ratingStars += ' '
        } else {
            ratingStars += '<span style="font-size: 45%;color: gray">&#9733;</span>';       //empty star
            ratingStars += ' '

        }
    }
    let node = document.createElement("div");
    node.classList.add("item")
    node.innerHTML = `
   
        <div class="item_img">
        <div class="add_to_cart">
        <span id="remove_item_meal${i}" class="remove_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
      </svg></span>
        <span id="item_in_cart_meal${i}" class="item_in_cart"><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg><span id="cart_count_meal${i}" class="cart_count">0</span></span>
        <span id="add_item_meal${i}" class="add_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
      </svg></span>
    </div>
        <img src="${meal[i][0]}" class="rounded" alt="${meal[i][1]}"
        height="100%" width="95%">
</div>
        <div class="item_details">
            <div class="item_name">
                ${meal[i][1]}
            </div>
            <div class="item_description">
                ${meal[i][2]} &#x20B9;
                ${meal[i][7]}
            </div>
            <div class="item_rating">
                ${ratingStars}
            </div>
        </div>
    `;
    document.getElementById("menu_items_meal_id").appendChild(node);
}


for (let i = 0; i < meal.length; i++) {
    let meal_item_count = 0;
    document.getElementById(`remove_item_meal${i}`).addEventListener("click", () => {
        cart_items_total_amount-=meal[i][7];
        console.log("kjednwkje")
        if (cart_items_total_count == 0) {
            document.getElementById("my_cart_id").style.display = "none"

        }
        if (meal[i][4] > 0) {
            if (meal_item_count > 0) {
                meal_item_count--;

                cart_items_total_count--;
                if (meal[i][4] > 1) {
                    meal[i][4]--;
                    // cart_items[meal[i][4]][4]--;
                    // cart_items_total_count--;
                    document.getElementById(`my_cart_item_count_meal_id${i}`).innerHTML = meal[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)

                    document.getElementById(`cart_count_meal${i}`).innerHTML = meal[i][4];
                }
                else {
                    meal[i][4]--;
                    cart_items.pop();
                    document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${i}`))
                    // document.getElementById(`my_cart_item_count_id${i}`).innerHTML = meal[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)

                    document.getElementById(`cart_count_meal${i}`).innerHTML = meal[i][4];
                }

            }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
            document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
            document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
        }
    })
    document.getElementById(`add_item_meal${i}`).addEventListener("click", () => {
        cart_items_total_amount+=meal[i][7];
        meal_item_count++;
        // console.log(cart_items)
        let i_can_add = 0;

        //    console.log(meal_cart_items);
        for (let check = 0; check < cart_items.length; check++) {
            if (cart_items[check][1] === meal[i][1]) {
                i_can_add = 1;
                cart_items_total_count++;
                meal[i][4]++;
                document.getElementById(`my_cart_item_count_meal_id${i}`).innerHTML = meal[i][4];
                //  console.log( meal[i][4])
            }


        }
        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        if (i_can_add == 0) {
            cart_items_total_count++;
            cart_items.push(meal[i]);
            let user_added_cart = document.createElement("div")
            user_added_cart.classList.add("my_cart_item");
            user_added_cart.setAttribute("id", `my_cart_item_id${i}`)
            meal[i][4]++;

            user_added_cart.innerHTML = `
  
            <div class="my_cart_food_info">
                <div class="my_cart_food_img">
                    <img src="${meal[i][0]}" alt="${meal[i][1]}"
                        height="50px" width="100px" class="rounded">
                </div>
                <div class="my_cart_food_details">
                    <span id="my_cart_food_item_name">  ${meal[i][1]}</span>
                    <span id="my_cart_food_item_price"> &#x20B9; ${meal[i][7]} each</span>
                </div>
            </div>
            <div class="my_cart_add_remove_item_cancel_btn">
                
                <div class="add_remove_my_cart_food_item">
                    <span class="my_cart_remove_item" id="my_cart_remove_item_meal_id${i}"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem" height="1.5rem"
                            fill="currentColor" class="bi bi-dash"
                            viewBox="0 0 16 16">
                            <path
                                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg></span></span>
                    <span class="my_cart_item_count" id="my_cart_item_count_meal_id${i}">${meal[i][4]}</span>
                    <span class="my_cart_add_item" id="my_cart_add_item_meal_id${i}"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem" height="1.5rem"
                            fill="currentColor" class="bi bi-plus"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg></span>
                </div>
            
     
    </div>`
            // document.getElementById('user_added_to_cart').appendChild(user_added_cart);

            // console.log(i)
            // console.log(cart_items.length)
            document.getElementById("user_added_cart_id").appendChild(user_added_cart);
        }


        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        document.getElementById(`cart_count_meal${i}`).innerHTML = meal[i][4];
        document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
        document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
        document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
    })
}

let comboo = [["https://plus.unsplash.com/premium_photo-1677654326198-33162c7ed6fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBsYXRlJTIwb2YlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D", "Cheese Cake", item_des, 5, 0, 0, 0,299],
["https://plus.unsplash.com/premium_photo-1671394138398-fe1ce5e5b03b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBsYXRlJTIwb2YlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D", "Chicken Roll", item_des, 5, 0, 1, 0,399],
["https://images.unsplash.com/photo-1514843319620-4f042827c481?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHBsYXRlJTIwb2YlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D", "Plate Shawarma", item_des, 5, 0, 2, 0,249],
["https://plus.unsplash.com/premium_photo-1695558759281-518eed6a6dda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHBsYXRlJTIwb2YlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D", "Chicken Wing", item_des, 5, 0, 3, 0,359],
["https://images.unsplash.com/photo-1524182576066-1bb979e25342?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBsYXRlJTIwb2YlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D", "Non-Veg Thali", item_des, 5, 0, 4, 0,399],
["https://images.unsplash.com/photo-1531234799389-dcb7651eb0a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHBsYXRlJTIwb2YlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D", "Egg Bread", item_des, 4, 0, 5, 0,159],
["https://images.unsplash.com/photo-1526016650454-68a6f488910a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxwbGF0ZSUyMG9mJTIwZm9vZHxlbnwwfDB8MHx8fDA%3D", "Starters", item_des, 4, 0, 6, 0,259],
["https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHwwfDB8fHww", "Peripery Pizza", item_des, 4, 0, 7, 0,419]
]

for (let i = 0; i < comboo.length; i++) {
    let ratingStars = '';
    for (let j = 0; j < 5; j++) {
        if (j < comboo[i][3]) {
            ratingStars += '<span style="font-size: 45%; color: orange">&#9733;</span> ';   // filled star with orange color
            ratingStars += ' '
        } else {
            ratingStars += '<span style="font-size: 45%;color: gray">&#9733;</span>';       //empty star
            ratingStars += ' '

        }
    }
    let node = document.createElement("div");
    node.classList.add("item")
    node.innerHTML = `
   
        <div class="item_img">
        <div class="add_to_cart">
        <span id="remove_item_comboo${i}" class="remove_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
      </svg></span>
        <span id="item_in_cart_comboo${i}" class="item_in_cart"><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg><span id="cart_count_comboo${i}" class="cart_count">0</span></span>
        <span id="add_item_comboo${i}" class="add_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
      </svg></span>
    </div>
        <img src="${comboo[i][0]}" class="rounded" alt="${comboo[i][1]}"
        height="100%" width="95%">
</div>
        <div class="item_details">
            <div class="item_name">
                ${comboo[i][1]}
            </div>
            <div class="item_description">
                ${comboo[i][2]} &#x20B9; ${comboo[i][7]}
            </div>
            <div class="item_rating">
                ${ratingStars}
            </div>
        </div>
    `;
    document.getElementById("menu_items_comboo_id").appendChild(node);
}


for (let i = 0; i < comboo.length; i++) {
    let comboo_item_count = 0;
    document.getElementById(`remove_item_comboo${i}`).addEventListener("click", () => {
        cart_items_total_amount-=comboo[i][7];
        console.log("kjednwkje")
        if (cart_items_total_count == 0) {
            document.getElementById("my_cart_id").style.display = "none"

        }
        if (comboo[i][4] > 0) {
            if (comboo_item_count > 0) {
                comboo_item_count--;

                cart_items_total_count--;
                if (comboo[i][4] > 1) {
                    comboo[i][4]--;
                    // cart_items[comboo[i][4]][4]--;
                    // cart_items_total_count--;
                    document.getElementById(`my_cart_item_count_comboo_id${i}`).innerHTML = comboo[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)

                    document.getElementById(`cart_count_comboo${i}`).innerHTML = comboo[i][4];
                }
                else {
                    comboo[i][4]--;
                    cart_items.pop();
                    document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${i}`))
                    // document.getElementById(`my_cart_item_count_id${i}`).innerHTML = comboo[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)

                    document.getElementById(`cart_count_comboo${i}`).innerHTML = comboo[i][4];
                }

            }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
            document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
            document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
        }
    })
    document.getElementById(`add_item_comboo${i}`).addEventListener("click", () => {
        cart_items_total_amount+=comboo[i][7];
        comboo_item_count++;
        // console.log(cart_items)
        let i_can_add = 0;

        //    console.log(comboo_cart_items);
        for (let check = 0; check < cart_items.length; check++) {
            if (cart_items[check][1] === comboo[i][1]) {
                i_can_add = 1;
                cart_items_total_count++;
                comboo[i][4]++;
                document.getElementById(`my_cart_item_count_comboo_id${i}`).innerHTML = comboo[i][4];
                //  console.log( comboo[i][4])
            }


        }
        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        if (i_can_add == 0) {
            cart_items_total_count++;
            cart_items.push(comboo[i]);
            let user_added_cart = document.createElement("div")
            user_added_cart.classList.add("my_cart_item");
            user_added_cart.setAttribute("id", `my_cart_item_id${i}`)
            comboo[i][4]++;

            user_added_cart.innerHTML = `
  
            <div class="my_cart_food_info">
                <div class="my_cart_food_img">
                    <img src="${comboo[i][0]}" alt="${comboo[i][1]}"
                        height="50px" width="100px" class="rounded">
                </div>
                <div class="my_cart_food_details">
                    <span id="my_cart_food_item_name">  ${comboo[i][1]}</span>
                    <span id="my_cart_food_item_price">&#x20B9;  ${comboo[i][7]} each</span>
                </div>
            </div>
            <div class="my_cart_add_remove_item_cancel_btn">
                
                <div class="add_remove_my_cart_food_item">
                    <span class="my_cart_remove_item" id="my_cart_remove_item_comboo_id${i}"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem" height="1.5rem"
                            fill="currentColor" class="bi bi-dash"
                            viewBox="0 0 16 16">
                            <path
                                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg></span></span>
                    <span class="my_cart_item_count" id="my_cart_item_count_comboo_id${i}">${comboo[i][4]}</span>
                    <span class="my_cart_add_item" id="my_cart_add_item_comboo_id${i}"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem" height="1.5rem"
                            fill="currentColor" class="bi bi-plus"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg></span>
                </div>
            
     
    </div>`
            // document.getElementById('user_added_to_cart').appendChild(user_added_cart);

            // console.log(i)
            // console.log(cart_items.length)
            document.getElementById("user_added_cart_id").appendChild(user_added_cart);
        }


        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        document.getElementById(`cart_count_comboo${i}`).innerHTML = comboo[i][4];
        document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
        document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
        document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
    })
}
let soup = [
    ["https://images.unsplash.com/photo-1574653853117-0274131c2175?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHNvdXB8ZW58MHwwfDB8fHww", "Prawn Soup", item_des, 5, 0, 0, 70],
    ["https://images.unsplash.com/photo-1588566565463-180a5b2090d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHNvdXB8ZW58MHwwfDB8fHww", "Mushroom Soup", item_des, 5, 0, 1, 0,30],
    ["https://images.unsplash.com/photo-1533622447723-ddb6468ad2df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHNvdXB8ZW58MHwwfDB8fHww", "Corn Soup", item_des, 5, 0, 2, 0,30],
    ["https://images.unsplash.com/photo-1621179817588-f4a923daa3ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHNvdXB8ZW58MHwwfDB8fHww", "Mutton Soup", item_des, 5, 0, 3, 0,80],
    ["https://images.unsplash.com/photo-1543283814-64738c3a3d6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHNvdXB8ZW58MHwwfDB8fHww", "Cauliflower Soup", item_des, 5, 0, 4, 0,50],
    ["https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNvdXB8ZW58MHwwfDB8fHww", "Chicken Soup", item_des, 5, 0, 5, 0,60],
    ["https://images.unsplash.com/photo-1589534954619-ca628b1d54f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHNvdXB8ZW58MHwwfDB8fHww", "Attu Kaal Soup", item_des, 4, 0, 6, 0,100],
    ["https://images.unsplash.com/photo-1616501268826-ee9731c915d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c291cHxlbnwwfDB8MHx8fDA%3D", "Paneer Paya", item_des, 4, 0, 7, 0,80],
    ["https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNvdXB8ZW58MHwwfDB8fHww", "Nandu Soup", item_des, 3, 0, 8, 0,120],
    ["https://images.unsplash.com/photo-1600845285511-12d222278dc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNvdXB8ZW58MHwwfDB8fHww", "Pumbkin Soup", item_des, 3, 0, 9, 0,40]];


for (let i = 0; i < soup.length; i++) {
    let ratingStars = '';
    for (let j = 0; j < 5; j++) {
        if (j < soup[i][3]) {
            ratingStars += '<span style="font-size: 45%; color: orange">&#9733;</span> ';   // filled star with orange color
            ratingStars += ' '
        } else {
            ratingStars += '<span style="font-size: 45%;color: gray">&#9733;</span>';       //empty star
            ratingStars += ' '

        }
    }
    let node = document.createElement("div");
    node.classList.add("item")
    node.innerHTML = `
       
            <div class="item_img">
            <div class="add_to_cart">
            <span id="remove_item_soup${i}" class="remove_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
          </svg></span>
            <span id="item_in_cart_soup${i}" class="item_in_cart"><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg><span id="cart_count_soup${i}" class="cart_count">0</span></span>
            <span id="add_item_soup${i}" class="add_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
          </svg></span>
        </div>
            <img src="${soup[i][0]}" class="rounded" alt="${soup[i][1]}"
            height="100%" width="95%">
    </div>
            <div class="item_details">
                <div class="item_name">
                    ${soup[i][1]}
                </div>
                <div class="item_description">
                    ${soup[i][2]} &#x20B9; ${soup[i][7]}
                </div>
                <div class="item_rating">
                    ${ratingStars}
                </div>
            </div>
        `;
    document.getElementById("menu_items_soup_id").appendChild(node);
}


for (let i = 0; i < soup.length; i++) {
    let soup_item_count = 0;
    document.getElementById(`remove_item_soup${i}`).addEventListener("click", () => {
        cart_items_total_amount-=soup[i][7];
        console.log("kjednwkje")
        if (cart_items_total_count == 0) {
            document.getElementById("my_cart_id").style.display = "none"

        }
        if (soup[i][4] > 0) {
            if (soup_item_count > 0) {
                soup_item_count--;

                cart_items_total_count--;
                if (soup[i][4] > 1) {
                    soup[i][4]--;
                    // cart_items[soup[i][4]][4]--;
                    // cart_items_total_count--;
                    document.getElementById(`my_cart_item_count_soup_id${i}`).innerHTML = soup[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)

                    document.getElementById(`cart_count_soup${i}`).innerHTML = soup[i][4];
                }
                else {
                    soup[i][4]--;
                    cart_items.pop();
                    document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${i}`))
                    // document.getElementById(`my_cart_item_count_id${i}`).innerHTML = soup[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)

                    document.getElementById(`cart_count_soup${i}`).innerHTML = soup[i][4];
                }

            }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
            document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
            document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
        }
    })
    document.getElementById(`add_item_soup${i}`).addEventListener("click", () => {
        cart_items_total_amount+=soup[i][7];
        soup_item_count++;
        // console.log(cart_items)
        let i_can_add = 0;

        //    console.log(soup_cart_items);
        for (let check = 0; check < cart_items.length; check++) {
            if (cart_items[check][1] === soup[i][1]) {
                i_can_add = 1;
                cart_items_total_count++;
                soup[i][4]++;
                document.getElementById(`my_cart_item_count_soup_id${i}`).innerHTML = soup[i][4];
                //  console.log( soup[i][4])
            }


        }
        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        if (i_can_add == 0) {
            cart_items_total_count++;
            cart_items.push(soup[i]);
            let user_added_cart = document.createElement("div")
            user_added_cart.classList.add("my_cart_item");
            user_added_cart.setAttribute("id", `my_cart_item_id${i}`)
            soup[i][4]++;

            user_added_cart.innerHTML = `
      
                <div class="my_cart_food_info">
                    <div class="my_cart_food_img">
                        <img src="${soup[i][0]}" alt="${soup[i][1]}"
                            height="50px" width="100px" class="rounded">
                    </div>
                    <div class="my_cart_food_details">
                        <span id="my_cart_food_item_name">  ${soup[i][1]}</span>
                        <span id="my_cart_food_item_price"> &#x20B9; ${soup[i][7]} each</span>
                    </div>
                </div>
                <div class="my_cart_add_remove_item_cancel_btn">
                    
                    <div class="add_remove_my_cart_food_item">
                        <span class="my_cart_remove_item" id="my_cart_remove_item_soup_id${i}"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.5rem" height="1.5rem"
                                fill="currentColor" class="bi bi-dash"
                                viewBox="0 0 16 16">
                                <path
                                    d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                            </svg></span></span>
                        <span class="my_cart_item_count" id="my_cart_item_count_soup_id${i}">${soup[i][4]}</span>
                        <span class="my_cart_add_item" id="my_cart_add_item_soup_id${i}"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.5rem" height="1.5rem"
                                fill="currentColor" class="bi bi-plus"
                                viewBox="0 0 16 16">
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg></span>
                    </div>
                
         
        </div>`
            // document.getElementById('user_added_to_cart').appendChild(user_added_cart);

            // console.log(i)
            // console.log(cart_items.length)
            document.getElementById("user_added_cart_id").appendChild(user_added_cart);
        }


        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        document.getElementById(`cart_count_soup${i}`).innerHTML = soup[i][4];
        document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
        document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
        document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
    })
}
let starter = [
    ["https://plus.unsplash.com/premium_photo-1668998194926-e10dead86ad9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHN0YXJ0ZXJzfGVufDB8MHwwfHx8MA%3D%3D", "Pani Puri", item_des, 5, 0, 0, 0,30],
    ["https://plus.unsplash.com/premium_photo-1669150849193-adf758944b30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHN0YXJ0ZXJzfGVufDB8MHwwfHx8MA%3D%3D", "Fried Icecream", item_des, 5, 0, 1, 0,30],
    ["https://plus.unsplash.com/premium_photo-1677686707466-2c86b174d072?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHN0YXJ0ZXJzfGVufDB8MHwwfHx8MA%3D%3D", "Veg Sandwich", item_des, 5, 0, 2, 0,30],
    ["https://images.unsplash.com/photo-1653982466845-33ba16dfd908?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHN0YXJ0ZXJzfGVufDB8MHwwfHx8MA%3D%3D", "Mushroom Fry", item_des, 5, 0, 3, 0,60],
    ["https://images.unsplash.com/photo-1580302498882-b5aa77f09b75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHN0YXJ0ZXJzfGVufDB8MHwwfHx8MA%3D%3D", "Prawn Fry", item_des, 5, 0, 4, 0,120],
    ["https://plus.unsplash.com/premium_photo-1661600643912-dc6dbb1db475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0YXJ0ZXJzfGVufDB8MHwwfHx8MA%3D%3D", "Veg Moomo", item_des, 5, 0, 5, 0,70],
    ["https://plus.unsplash.com/premium_photo-1667807521884-e25207a0555b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0YXJ0ZXJzfGVufDB8MHwwfHx8MA%3D%3D", "Chicken Moomo", item_des, 5, 0, 6, 0,90],
    ["https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftb3NhfGVufDB8MHwwfHx8MA%3D%3D", "Veg Samosa", item_des, 5, 0, 7, 0,30],
    ["https://plus.unsplash.com/premium_photo-1695297515191-5870e86dcbe0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Ftb3NhfGVufDB8MHwwfHx8MA%3D%3D", "Chicken Samosa", item_des, 4, 0, 8, 0,50],
    ["https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHwwfDB8fHww", "Mushroom Pizza", item_des, 4, 0, 9, 0,90],
    ["https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHwwfDB8fHww", "Peripery Pizza", item_des, 4, 0, 10, 0,180]
]


for (let i = 0; i < starter.length; i++) {
    let ratingStars = '';
    for (let j = 0; j < 5; j++) {
        if (j < starter[i][3]) {
            ratingStars += '<span style="font-size: 45%; color: orange">&#9733;</span> ';   // filled star with orange color
            ratingStars += ' '
        } else {
            ratingStars += '<span style="font-size: 45%;color: gray">&#9733;</span>';       //empty star
            ratingStars += ' '

        }
    }
    let node = document.createElement("div");
    node.classList.add("item")
    node.innerHTML = `
   
        <div class="item_img">
        <div class="add_to_cart">
        <span id="remove_item_starter${i}" class="remove_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
      </svg></span>
        <span id="item_in_cart_starter${i}" class="item_in_cart"><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg><span id="cart_count_starter${i}" class="cart_count">0</span></span>
        <span id="add_item_starter${i}" class="add_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
      </svg></span>
    </div>
        <img src="${starter[i][0]}" class="rounded" alt="${starter[i][1]}"
        height="100%" width="95%">
</div>
        <div class="item_details">
            <div class="item_name">
                ${starter[i][1]}
            </div>
            <div class="item_description">
                ${starter[i][2]} &#x20B9; ${starter[i][7]}
            </div>
            <div class="item_rating">
                ${ratingStars}
            </div>
        </div>
    `;
    document.getElementById("menu_items_starter_id").appendChild(node);
}


for (let i = 0; i < starter.length; i++) {
    let starter_item_count = 0;
    document.getElementById(`remove_item_starter${i}`).addEventListener("click", () => {
        cart_items_total_amount-=starter[i][7];
        console.log("kjednwkje")
        if (cart_items_total_count == 0) {
            document.getElementById("my_cart_id").style.display = "none"

        }
        if (starter[i][4] > 0) {
            if (starter_item_count > 0) {
                starter_item_count--;

                cart_items_total_count--;
                if (starter[i][4] > 1) {
                    starter[i][4]--;
                    // cart_items[starter[i][4]][4]--;
                    // cart_items_total_count--;
                    document.getElementById(`my_cart_item_count_starter_id${i}`).innerHTML = starter[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)

                    document.getElementById(`cart_count_starter${i}`).innerHTML = starter[i][4];
                }
                else {
                    starter[i][4]--;
                    cart_items.pop();
                    document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${i}`))
                    // document.getElementById(`my_cart_item_count_id${i}`).innerHTML = starter[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)

                    document.getElementById(`cart_count_starter${i}`).innerHTML = starter[i][4];
                }

            }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
            document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
            document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
        }
    })
    document.getElementById(`add_item_starter${i}`).addEventListener("click", () => {
        cart_items_total_amount+=starter[i][7];
        starter_item_count++;
        // console.log(cart_items)
        let i_can_add = 0;

        //    console.log(starter_cart_items);
        for (let check = 0; check < cart_items.length; check++) {
            if (cart_items[check][1] === starter[i][1]) {
                i_can_add = 1;
                cart_items_total_count++;
                starter[i][4]++;
                document.getElementById(`my_cart_item_count_starter_id${i}`).innerHTML = starter[i][4];
                //  console.log( starter[i][4])
            }


        }
        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        if (i_can_add == 0) {
            cart_items_total_count++;
            cart_items.push(starter[i]);
            let user_added_cart = document.createElement("div")
            user_added_cart.classList.add("my_cart_item");
            user_added_cart.setAttribute("id", `my_cart_item_id${i}`)
            starter[i][4]++;

            user_added_cart.innerHTML = `
  
            <div class="my_cart_food_info">
                <div class="my_cart_food_img">
                    <img src="${starter[i][0]}" alt="${starter[i][1]}"
                        height="50px" width="100px" class="rounded">
                </div>
                <div class="my_cart_food_details">
                    <span id="my_cart_food_item_name">  ${starter[i][1]}</span>
                    <span id="my_cart_food_item_price">&#x20B9; ${starter[i][7]} each</span>
                </div>
            </div>
            <div class="my_cart_add_remove_item_cancel_btn">
                
                <div class="add_remove_my_cart_food_item">
                    <span class="my_cart_remove_item" id="my_cart_remove_item_starter_id${i}"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem" height="1.5rem"
                            fill="currentColor" class="bi bi-dash"
                            viewBox="0 0 16 16">
                            <path
                                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg></span></span>
                    <span class="my_cart_item_count" id="my_cart_item_count_starter_id${i}">${starter[i][4]}</span>
                    <span class="my_cart_add_item" id="my_cart_add_item_starter_id${i}"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem" height="1.5rem"
                            fill="currentColor" class="bi bi-plus"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg></span>
                </div>
            
     
    </div>`
            // document.getElementById('user_added_to_cart').appendChild(user_added_cart);

            // console.log(i)
            // console.log(cart_items.length)
            document.getElementById("user_added_cart_id").appendChild(user_added_cart);
        }


        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        document.getElementById(`cart_count_starter${i}`).innerHTML = starter[i][4];
        document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
        document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
        document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
    })
}
let gravy = [
    ["https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3Jhdmllc3xlbnwwfDB8MHx8fDA%3D", "Panneer Butter Masala", item_des, 5, 0, 0, 0,100],
    ["https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3Vycnl8ZW58MHwwfDB8fHww", "Chicken Curry", item_des, 5, 0, 1, 0,150],
    ["https://images.unsplash.com/photo-1551889579-8acb3f14a917?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGN1cnJ5fGVufDB8MHwwfHx8MA%3D%3D", "Mutton Curry", item_des, 5, 0, 2, 0,220],
    ["https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1cnJ5fGVufDB8MHwwfHx8MA%3D%3D", "Prawn Cuury", item_des, 5, 0, 3, 0,180],
    ["https://images.unsplash.com/photo-1565280654386-36c3ea205191?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGN1cnJ5fGVufDB8MHwwfHx8MA%3D%3D", "Beep Curry", item_des, 5, 0, 4, 0,200],
    ["https://images.unsplash.com/photo-1626508035297-0cd27c397d67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGN1cnJ5fGVufDB8MHwwfHx8MA%3D%3D", "Vanzharam Curry", item_des, 5, 0, 5, 0,250],
    ["https://images.unsplash.com/photo-1613160774881-b35ffc363ea3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGN1cnJ5fGVufDB8MHwwfHx8MA%3D%3D", "Mushroom Curry", item_des, 4, 0, 6, 0,80],
    ["https://images.unsplash.com/photo-1621179815459-073503f7b444?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGN1cnJ5fGVufDB8MHwwfHx8MA%3D%3D", "Dhaal Curry", item_des, 4, 0, 7, 0,50]
]
for (let i = 0; i < gravy.length; i++) {
    let ratingStars = '';
    for (let j = 0; j < 5; j++) {
        if (j < gravy[i][3]) {
            ratingStars += '<span style="font-size: 45%; color: orange">&#9733;</span> ';   // filled star with orange color
            ratingStars += ' '
        } else {
            ratingStars += '<span style="font-size: 45%;color: gray">&#9733;</span>';       //empty star
            ratingStars += ' '

        }
    }
    let node = document.createElement("div");
    node.classList.add("item")
    node.innerHTML = `
   
        <div class="item_img">
        <div class="add_to_cart">
        <span id="remove_item_gravy${i}" class="remove_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
      </svg></span>
        <span id="item_in_cart_gravy${i}" class="item_in_cart"><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg><span id="cart_count_gravy${i}" class="cart_count">0</span></span>
        <span id="add_item_gravy${i}" class="add_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
      </svg></span>
    </div>
        <img src="${gravy[i][0]}" class="rounded" alt="${gravy[i][1]}"
        height="100%" width="95%">
</div>
        <div class="item_details">
            <div class="item_name">
                ${gravy[i][1]}
            </div>
            <div class="item_description">
                ${gravy[i][2]} &#x20B9; ${gravy[i][7]}
            </div>
            <div class="item_rating">
                ${ratingStars}
            </div>
        </div>
    `;
    document.getElementById("menu_items_gravy_id").appendChild(node);
}


for (let i = 0; i < gravy.length; i++) {
    let gravy_item_count = 0;
    document.getElementById(`remove_item_gravy${i}`).addEventListener("click", () => {
        cart_items_total_amount-=gravy[i][7];
        console.log("kjednwkje")
        if (cart_items_total_count == 0) {
            document.getElementById("my_cart_id").style.display = "none"

        }
        if (gravy[i][4] > 0) {
            if (gravy_item_count > 0) {
                gravy_item_count--;

                cart_items_total_count--;
                if (gravy[i][4] > 1) {
                    gravy[i][4]--;
                    // cart_items[g[i][4]][4]--;
                    // cart_items_total_count--;
                    document.getElementById(`my_cart_item_count_gravy_id${i}`).innerHTML = gravy[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)

                    document.getElementById(`cart_count_g${i}`).innerHTML = g[i][4];
                }
                else {
                    gravy[i][4]--;
                    cart_items.pop();
                    document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${i}`))
                    // document.getElementById(`my_cart_item_count_id${i}`).innerHTML = g[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)

                    document.getElementById(`cart_count_gravy${i}`).innerHTML = gravy[i][4];
                }

            }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
            document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
            document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
        }
    })
    document.getElementById(`add_item_gravy${i}`).addEventListener("click", () => {
        cart_items_total_amount+=gravy[i][7];
        gravy_item_count++;
        // console.log(cart_items)
        let i_can_add = 0;

        //    console.log(g_cart_items);
        for (let check = 0; check < cart_items.length; check++) {
            if (cart_items[check][1] === gravy[i][1]) {
                i_can_add = 1;
                cart_items_total_count++;
                gravy[i][4]++;
                document.getElementById(`my_cart_item_count_gravy_id${i}`).innerHTML = gravy[i][4];
                //  console.log( g[i][4])
            }


        }
        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        if (i_can_add == 0) {
            cart_items_total_count++;
            cart_items.push(gravy[i]);
            let user_added_cart = document.createElement("div")
            user_added_cart.classList.add("my_cart_item");
            user_added_cart.setAttribute("id", `my_cart_item_id${i}`)
            gravy[i][4]++;

            user_added_cart.innerHTML = `
  
            <div class="my_cart_food_info">
                <div class="my_cart_food_img">
                    <img src="${gravy[i][0]}" alt="${gravy[i][1]}"
                        height="50px" width="100px" class="rounded">
                </div>
                <div class="my_cart_food_details">
                    <span id="my_cart_food_item_name">  ${gravy[i][1]}</span>
                    <span id="my_cart_food_item_price"> &#x20B9; ${gravy[i][7]} each</span>
                </div>
            </div>
            <div class="my_cart_add_remove_item_cancel_btn">
                
                <div class="add_remove_my_cart_food_item">
                    <span class="my_cart_remove_item" id="my_cart_remove_item_gravy_id${i}"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem" height="1.5rem"
                            fill="currentColor" class="bi bi-dash"
                            viewBox="0 0 16 16">
                            <path
                                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg></span></span>
                    <span class="my_cart_item_count" id="my_cart_item_count_gravy_id${i}">${gravy[i][4]}</span>
                    <span class="my_cart_add_item" id="my_cart_add_item_gravy_id${i}"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem" height="1.5rem"
                            fill="currentColor" class="bi bi-plus"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg></span>
                </div>
            
     
    </div>`
            // document.getElementById('user_added_to_cart').appendChild(user_added_cart);

            // console.log(i)
            // console.log(cart_items.length)
            document.getElementById("user_added_cart_id").appendChild(user_added_cart);
        }


        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        document.getElementById(`cart_count_gravy${i}`).innerHTML = gravy[i][4];
        document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
        document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
        document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
    })
}
let briyani = [
    ["https://images.unsplash.com/photo-1642821373181-696a54913e93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJpeWFuaXxlbnwwfDB8MHx8fDA%3D", "Veg Briyani", item_des, 5, 0, 0, 0,120],
    ["https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHwwfDB8fHww", "Chicken Briyani", item_des, 5, 0, 1, 0,210],
    ["https://plus.unsplash.com/premium_photo-1694141250007-fc4711bb9df1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHwwfDB8fHww", "Mushroom Briyani", item_des, 5, 0, 2, 0,180],
    ["https://images.unsplash.com/photo-1630851840633-f96999247032?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHwwfDB8fHww", "Thalapakat Briyani", item_des, 5, 0, 3, 0,150],
    ["https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoaWNrZW4lMjBiaXJ5YW5pfGVufDB8MHwwfHx8MA%3D%3D", "Mutton Briyani", item_des, 5, 0, 4, 0,310],
    ["https://images.unsplash.com/photo-1697155406055-2db32d47ca07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGNoaWNrZW4lMjBiaXJ5YW5pfGVufDB8MHwwfHx8MA%3D%3D", "Hyderabad  Briyani", item_des, 3, 0, 5, 0,280],
    ["https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11dHRvbiUyMGJpcnlhbml8ZW58MHwwfDB8fHww", "Briyani Thaali", item_des, 3, 0, 6, 0,300]
]
for (let i = 0; i < briyani.length; i++) {
    let ratingStars = '';
    for (let j = 0; j < 5; j++) {
        if (j < briyani[i][3]) {
            ratingStars += '<span style="font-size: 45%; color: orange">&#9733;</span> ';   // filled star with orange color
            ratingStars += ' '
        } else {
            ratingStars += '<span style="font-size: 45%;color: gray">&#9733;</span>';       //empty star
            ratingStars += ' '

        }
    }
    let node = document.createElement("div");
    node.classList.add("item")
    node.innerHTML = `
   
        <div class="item_img">
        <div class="add_to_cart">
        <span id="remove_item_briyani${i}" class="remove_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
      </svg></span>
        <span id="item_in_cart_briyani${i}" class="item_in_cart"><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg><span id="cart_count_briyani${i}" class="cart_count">0</span></span>
        <span id="add_item_briyani${i}" class="add_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
      </svg></span>
    </div>
        <img src="${briyani[i][0]}" class="rounded" alt="${briyani[i][1]}"
        height="100%" width="95%">
</div>
        <div class="item_details">
            <div class="item_name">
                ${briyani[i][1]}
            </div>
            <div class="item_description">
                ${briyani[i][2]} &#x20B9; ${briyani[i][7]}
            </div>
            <div class="item_rating">
                ${ratingStars}
            </div>
        </div>
    `;
    document.getElementById("menu_items_briyani_id").appendChild(node);
}


for (let i = 0; i < briyani.length; i++) {
    let briyani_item_count = 0;
    document.getElementById(`remove_item_briyani${i}`).addEventListener("click", () => {
        cart_items_total_amount-=briyani[i][7];
        console.log("kjednwkje")
        if (cart_items_total_count == 0) {
            document.getElementById("my_cart_id").style.display = "none"

        }
        if (briyani[i][4] > 0) {
            if (briyani_item_count > 0) {
                briyani_item_count--;

                cart_items_total_count--;
                if (briyani[i][4] > 1) {
                    briyani[i][4]--;
                    // cart_items[briyani[i][4]][4]--;
                    // cart_items_total_count--;
                    document.getElementById(`my_cart_item_count_briyani_id${i}`).innerHTML = briyani[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)

                    document.getElementById(`cart_count_briyani${i}`).innerHTML = briyani[i][4];
                }
                else {
                    briyani[i][4]--;
                    cart_items.pop();
                    document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${i}`))
                    // document.getElementById(`my_cart_item_count_id${i}`).innerHTML = briyani[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)

                    document.getElementById(`cart_count_briyani${i}`).innerHTML = briyani[i][4];
                }

            }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
            document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
            document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
        }
    })
    document.getElementById(`add_item_briyani${i}`).addEventListener("click", () => {
        cart_items_total_amount+=briyani[i][7];
        briyani_item_count++;
        // console.log(cart_items)
        let i_can_add = 0;

        //    console.log(briyani_cart_items);
        for (let check = 0; check < cart_items.length; check++) {
            if (cart_items[check][1] === briyani[i][1]) {
                i_can_add = 1;
                cart_items_total_count++;
                briyani[i][4]++;
                document.getElementById(`my_cart_item_count_briyani_id${i}`).innerHTML = briyani[i][4];
                //  console.log( briyani[i][4])
            }


        }
        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        if (i_can_add == 0) {
            cart_items_total_count++;
            cart_items.push(briyani[i]);
            let user_added_cart = document.createElement("div")
            user_added_cart.classList.add("my_cart_item");
            user_added_cart.setAttribute("id", `my_cart_item_id${i}`)
            briyani[i][4]++;

            user_added_cart.innerHTML = `
  
            <div class="my_cart_food_info">
                <div class="my_cart_food_img">
                    <img src="${briyani[i][0]}" alt="${briyani[i][1]}"
                        height="50px" width="100px" class="rounded">
                </div>
                <div class="my_cart_food_details">
                    <span id="my_cart_food_item_name">  ${briyani[i][1]}</span>
                    <span id="my_cart_food_item_price">&#x20B9;  ${briyani[i][7]} each</span>
                </div>
            </div>
            <div class="my_cart_add_remove_item_cancel_btn">
                
                <div class="add_remove_my_cart_food_item">
                    <span class="my_cart_remove_item" id="my_cart_remove_item_briyani_id${i}"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem" height="1.5rem"
                            fill="currentColor" class="bi bi-dash"
                            viewBox="0 0 16 16">
                            <path
                                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg></span></span>
                    <span class="my_cart_item_count" id="my_cart_item_count_briyani_id${i}">${briyani[i][4]}</span>
                    <span class="my_cart_add_item" id="my_cart_add_item_briyani_id${i}"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem" height="1.5rem"
                            fill="currentColor" class="bi bi-plus"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg></span>
                </div>
            
     
    </div>`
            // document.getElementById('user_added_to_cart').appendChild(user_added_cart);

            // console.log(i)
            // console.log(cart_items.length)
            document.getElementById("user_added_cart_id").appendChild(user_added_cart);
        }


        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        document.getElementById(`cart_count_briyani${i}`).innerHTML = briyani[i][4];
        document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
        document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
        document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
    })
}
let kebab = [
    ["https://images.unsplash.com/photo-1595777216528-071e0127ccbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2ViYWIlNUN8ZW58MHwwfDB8fHww", "Chicken Kebab", item_des, 5, 0, 0, 0,450],
    ["https://images.unsplash.com/photo-1596995804697-27d11d43652e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2ViYWIlNUN8ZW58MHwwfDB8fHww", "Chicken Shavarma", item_des, 5, 0, 1, 0,250],
    ["https://images.unsplash.com/photo-1561626423-a51b45aef0a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtlYmFiJTVDfGVufDB8MHwwfHx8MA%3D%3D", "Mushroom Kebab", item_des, 5, 0, 2, 0,200],
    ["https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGtlYmFiJTVDfGVufDB8MHwwfHx8MA%3D%3D", "Panner Kebab", item_des, 4, 0, 3, 0,270],
    ["https://plus.unsplash.com/premium_photo-1661310177352-f586bf23a403?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2ViYWIlNUN8ZW58MHwwfDB8fHww", "Mutton Kebeb", item_des, 4, 0, 4, 0,650],
    ["https://plus.unsplash.com/premium_photo-1695658518299-04b349ca9214?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGtlYmFiJTVDfGVufDB8MHwwfHx8MA%3D%3D", "Fish Kebab", item_des, 4, 0, 5, 0,150]
]
for (let i = 0; i < kebab.length; i++) {
    let ratingStars = '';
    for (let j = 0; j < 5; j++) {
        if (j < kebab[i][3]) {
            ratingStars += '<span style="font-size: 45%; color: orange">&#9733;</span> ';   // filled star with orange color
            ratingStars += ' '
        } else {
            ratingStars += '<span style="font-size: 45%;color: gray">&#9733;</span>';       //empty star
            ratingStars += ' '

        }
    }
    let node = document.createElement("div");
    node.classList.add("item")
    node.innerHTML = `
   
        <div class="item_img">
        <div class="add_to_cart">
        <span id="remove_item_kebab${i}" class="remove_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
      </svg></span>
        <span id="item_in_cart_kebab${i}" class="item_in_cart"><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg><span id="cart_count_kebab${i}" class="cart_count">0</span></span>
        <span id="add_item_kebab${i}" class="add_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
      </svg></span>
    </div>
        <img src="${kebab[i][0]}" class="rounded" alt="${kebab[i][1]}"
        height="100%" width="95%">
</div>
        <div class="item_details">
            <div class="item_name">
                ${kebab[i][1]}
            </div>
            <div class="item_description">
                ${kebab[i][2]} &#x20B9; ${kebab[i][7]}
            </div>
            <div class="item_rating">
                ${ratingStars}
            </div>
        </div>
    `;
    document.getElementById("menu_items_kebab_id").appendChild(node);
}


for (let i = 0; i < kebab.length; i++) {
    let kebab_item_count = 0;
    document.getElementById(`remove_item_kebab${i}`).addEventListener("click", () => {
        cart_items_total_amount-=kebab[i][7];
        console.log("kjednwkje")
        if (cart_items_total_count == 0) {
            document.getElementById("my_cart_id").style.display = "none"

        }
        if (kebab[i][4] > 0) {
            if (kebab_item_count > 0) {
                kebab_item_count--;

                cart_items_total_count--;
                if (kebab[i][4] > 1) {
                    kebab[i][4]--;
                    // cart_items[kebab[i][4]][4]--;
                    // cart_items_total_count--;
                    document.getElementById(`my_cart_item_count_kebab_id${i}`).innerHTML = kebab[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)

                    document.getElementById(`cart_count_kebab${i}`).innerHTML = kebab[i][4];
                }
                else {
                    kebab[i][4]--;
                    cart_items.pop();
                    document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${i}`))
                    // document.getElementById(`my_cart_item_count_id${i}`).innerHTML = kebab[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)

                    document.getElementById(`cart_count_kebab${i}`).innerHTML = kebab[i][4];
                }

            }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
            document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
            document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
        }
    })
    document.getElementById(`add_item_kebab${i}`).addEventListener("click", () => {
        cart_items_total_amount+=kebab[i][7];
        kebab_item_count++;
        // console.log(cart_items)
        let i_can_add = 0;

        //    console.log(kebab_cart_items);
        for (let check = 0; check < cart_items.length; check++) {
            if (cart_items[check][1] === kebab[i][1]) {
                i_can_add = 1;
                cart_items_total_count++;
                kebab[i][4]++;
                document.getElementById(`my_cart_item_count_kebab_id${i}`).innerHTML = kebab[i][4];
                //  console.log( kebab[i][4])
            }


        }
        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        if (i_can_add == 0) {
            cart_items_total_count++;
            cart_items.push(kebab[i]);
            let user_added_cart = document.createElement("div")
            user_added_cart.classList.add("my_cart_item");
            user_added_cart.setAttribute("id", `my_cart_item_id${i}`)
            kebab[i][4]++;

            user_added_cart.innerHTML = `
  
            <div class="my_cart_food_info">
                <div class="my_cart_food_img">
                    <img src="${kebab[i][0]}" alt="${kebab[i][1]}"
                        height="50px" width="100px" class="rounded">
                </div>
                <div class="my_cart_food_details">
                    <span id="my_cart_food_item_name">  ${kebab[i][1]}</span>
                    <span id="my_cart_food_item_price">&#x20B9;  ${kebab[i][7]} each</span>
                </div>
            </div>
            <div class="my_cart_add_remove_item_cancel_btn">
                
                <div class="add_remove_my_cart_food_item">
                    <span class="my_cart_remove_item" id="my_cart_remove_item_kebab_id${i}"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem" height="1.5rem"
                            fill="currentColor" class="bi bi-dash"
                            viewBox="0 0 16 16">
                            <path
                                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg></span></span>
                    <span class="my_cart_item_count" id="my_cart_item_count_kebab_id${i}">${kebab[i][4]}</span>
                    <span class="my_cart_add_item" id="my_cart_add_item_kebab_id${i}"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem" height="1.5rem"
                            fill="currentColor" class="bi bi-plus"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg></span>
                </div>
            
     
    </div>`
            // document.getElementById('user_added_to_cart').appendChild(user_added_cart);

            // console.log(i)
            // console.log(cart_items.length)
            document.getElementById("user_added_cart_id").appendChild(user_added_cart);
        }


        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        document.getElementById(`cart_count_kebab${i}`).innerHTML = kebab[i][4];
        document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
        document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
        document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
    })
}
let dessert = [
    ["https://plus.unsplash.com/premium_photo-1678715022988-417bbb94e3df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzc2VydHxlbnwwfDB8MHx8fDA%3D", "Milk Cake", item_des, 5, 0, 0, 0,70],
    ["https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzc2VydHxlbnwwfDB8MHx8fDA%3D", "Strawberry Cake", item_des, 5, 0, 1, 0,50],
    ["https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc3NlcnR8ZW58MHwwfDB8fHww", "Chocolate Cake", item_des, 5, 0, 2, 0,50],
    ["https://plus.unsplash.com/premium_photo-1700590072733-51ba16e93d38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fHww", "Fruit Icecream", item_des, 5, 0, 3, 0,80],
    ["https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRlc3NlcnR8ZW58MHwwfDB8fHww", "Makaroni", item_des, 5, 0, 4, 0,90],
    ["https://images.unsplash.com/photo-1541781550486-81b7a2328578?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRlc3NlcnR8ZW58MHwwfDB8fHww", "Cheese Cake", item_des, 5, 0, 5, 0,100],
    ["https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGRlc3NlcnR8ZW58MHwwfDB8fHww", "Birthday Cake", item_des, 5, 0, 6, 0,250],
    ["https://images.unsplash.com/photo-1561087548-94e6546744a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGRlc3NlcnR8ZW58MHwwfDB8fHww", "Butter Cake ", item_des, 5, 0, 7, 0,200],
    ["https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGRlc3NlcnR8ZW58MHwwfDB8fHww", "Cup Cake", item_des, 4, 0, 8, 0,30]
]
for (let i = 0; i < dessert.length; i++) {
    let ratingStars = '';
    for (let j = 0; j < 5; j++) {
        if (j < dessert[i][3]) {
            ratingStars += '<span style="font-size: 45%; color: orange">&#9733;</span> ';   // filled star with orange color
            ratingStars += ' '
        } else {
            ratingStars += '<span style="font-size: 45%;color: gray">&#9733;</span>';       //empty star
            ratingStars += ' '

        }
    }
    let node = document.createElement("div");
    node.classList.add("item")
    node.innerHTML = `
   
        <div class="item_img">
        <div class="add_to_cart">
        <span id="remove_item_dessert${i}" class="remove_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
      </svg></span>
        <span id="item_in_cart_dessert${i}" class="item_in_cart"><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg><span id="cart_count_dessert${i}" class="cart_count">0</span></span>
        <span id="add_item_dessert${i}" class="add_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
      </svg></span>
    </div>
        <img src="${dessert[i][0]}" class="rounded" alt="${dessert[i][1]}"
        height="100%" width="95%">
</div>
        <div class="item_details">
            <div class="item_name">
                ${dessert[i][1]}
            </div>
            <div class="item_description">
                ${dessert[i][2]} &#x20B9; ${dessert[i][7]}
            </div>
            <div class="item_rating">
                ${ratingStars}
            </div>
        </div>
    `;
    document.getElementById("menu_items_dessert_id").appendChild(node);
}


for (let i = 0; i < dessert.length; i++) {
    let dessert_item_count = 0;
    document.getElementById(`remove_item_dessert${i}`).addEventListener("click", () => {
        cart_items_total_amount-=dessert[i][7];
        console.log("kjednwkje")
        if (cart_items_total_count == 0) {
            document.getElementById("my_cart_id").style.display = "none"

        }
        if (dessert[i][4] > 0) {
            if (dessert_item_count > 0) {
                dessert_item_count--;

                cart_items_total_count--;
                if (dessert[i][4] > 1) {
                    dessert[i][4]--;
                    // cart_items[dessert[i][4]][4]--;
                    // cart_items_total_count--;
                    document.getElementById(`my_cart_item_count_dessert_id${i}`).innerHTML = dessert[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)

                    document.getElementById(`cart_count_dessert${i}`).innerHTML = dessert[i][4];
                }
                else {
                    dessert[i][4]--;
                    cart_items.pop();
                    document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${i}`))
                    // document.getElementById(`my_cart_item_count_id${i}`).innerHTML = dessert[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)

                    document.getElementById(`cart_count_dessert${i}`).innerHTML = dessert[i][4];
                }

            }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
            document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
            document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
        }
    })
    document.getElementById(`add_item_dessert${i}`).addEventListener("click", () => {
        cart_items_total_amount+=dessert[i][7];
        dessert_item_count++;
        // console.log(cart_items)
        let i_can_add = 0;

        //    console.log(dessert_cart_items);
        for (let check = 0; check < cart_items.length; check++) {
            if (cart_items[check][1] === dessert[i][1]) {
                i_can_add = 1;
                cart_items_total_count++;
                dessert[i][4]++;
                document.getElementById(`my_cart_item_count_dessert_id${i}`).innerHTML = dessert[i][4];
                //  console.log( dessert[i][4])
            }


        }
        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        if (i_can_add == 0) {
            cart_items_total_count++;
            cart_items.push(dessert[i]);
            let user_added_cart = document.createElement("div")
            user_added_cart.classList.add("my_cart_item");
            user_added_cart.setAttribute("id", `my_cart_item_id${i}`)
            dessert[i][4]++;

            user_added_cart.innerHTML = `
  
            <div class="my_cart_food_info">
                <div class="my_cart_food_img">
                    <img src="${dessert[i][0]}" alt="${dessert[i][1]}"
                        height="50px" width="100px" class="rounded">
                </div>
                <div class="my_cart_food_details">
                    <span id="my_cart_food_item_name">  ${dessert[i][1]}</span>
                    <span id="my_cart_food_item_price">&#x20B9;  ${dessert[i][7]} each</span>
                </div>
            </div>
            <div class="my_cart_add_remove_item_cancel_btn">
                
                <div class="add_remove_my_cart_food_item">
                    <span class="my_cart_remove_item" id="my_cart_remove_item_dessert_id${i}"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem" height="1.5rem"
                            fill="currentColor" class="bi bi-dash"
                            viewBox="0 0 16 16">
                            <path
                                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg></span></span>
                    <span class="my_cart_item_count" id="my_cart_item_count_dessert_id${i}">${dessert[i][4]}</span>
                    <span class="my_cart_add_item" id="my_cart_add_item_dessert_id${i}"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem" height="1.5rem"
                            fill="currentColor" class="bi bi-plus"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg></span>
                </div>
            
     
    </div>`
            // document.getElementById('user_added_to_cart').appendChild(user_added_cart);

            // console.log(i)
            // console.log(cart_items.length)
            document.getElementById("user_added_cart_id").appendChild(user_added_cart);
        }


        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        document.getElementById(`cart_count_dessert${i}`).innerHTML = dessert[i][4];
        document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
        document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
        document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;

    })
}
let beverage = [["https://plus.unsplash.com/premium_photo-1674407009848-4da7a12b6b25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmV2ZXJhZ2V8ZW58MHwwfDB8fHww", "Capaceno", item_des, 5, 0, 0, 0,120]
    , ["https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmV2ZXJhZ2V8ZW58MHwwfDB8fHww", " Black Tea", item_des, 5, 0, 1, 0,20],
["https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJldmVyYWdlfGVufDB8MHwwfHx8MA%3D%3D", " strawberry Juice", item_des, 5, 0, 2, 0,100],
["https://plus.unsplash.com/premium_photo-1675779427354-ccac79c71f8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGJldmVyYWdlfGVufDB8MHwwfHx8MA%3D%3D", " Lime Juice", item_des, 5, 0, 3, 0,30]
    , ["https://images.unsplash.com/photo-1534446173696-97f187f6b062?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGJldmVyYWdlfGVufDB8MHwwfHx8MA%3D%3D", "Grapes Juice", item_des, 5, 0, 4, 0,50],
["https://images.unsplash.com/photo-1561658286-ecb9fe9d8480?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZXZlcmFnZXxlbnwwfDB8MHx8fDA%3D", "Green Tea", item_des, 5, 0, 5, 0,50],
["https://images.unsplash.com/photo-1524156868115-e696b44983db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGJldmVyYWdlfGVufDB8MHwwfHx8MA%3D%3D", "Orange Juice", item_des, 5, 0, 6, 0,50],
["https://images.unsplash.com/photo-1481455473976-c280ae7c10f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGJldmVyYWdlfGVufDB8MHwwfHx8MA%3D%3D", "Tea", item_des, 5, 0, 7, 0,15],
["https://images.unsplash.com/photo-1588269965522-9bd83f3f3f13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJldmVyYWdlfGVufDB8MHwwfHx8MA%3D%3D", "Mojotoo", item_des, 4, 0, 8, 0,60],
["https://images.unsplash.com/photo-1554624219-1ba146a4fd87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmV2ZXJhZ2V8ZW58MHwwfDB8fHww", "Liquer", item_des, 4, 0, 9, 0,200]]

for (let i = 0; i < beverage.length; i++) {
    let ratingStars = '';
    for (let j = 0; j < 5; j++) {
        if (j < beverage[i][3]) {
            ratingStars += '<span style="font-size: 45%; color: orange">&#9733;</span> ';   // filled star with orange color
            ratingStars += ' '
        } else {
            ratingStars += '<span style="font-size: 45%;color: gray">&#9733;</span>';       //empty star
            ratingStars += ' '

        }
    }
    let node = document.createElement("div");
    node.classList.add("item")
    node.innerHTML = `
   
        <div class="item_img">
        <div class="add_to_cart">
        <span id="remove_item_beverage${i}" class="remove_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
      </svg></span>
        <span id="item_in_cart_beverage${i}" class="item_in_cart"><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg><span id="cart_count_beverage${i}" class="cart_count">0</span></span>
        <span id="add_item_beverage${i}" class="add_item"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
      </svg></span>
    </div>
        <img src="${beverage[i][0]}" class="rounded" alt="${beverage[i][1]}"
        height="100%" width="95%">
</div>
        <div class="item_details">
            <div class="item_name">
                ${beverage[i][1]}
            </div>
            <div class="item_description">
                ${beverage[i][2]} &#x20B9; ${beverage[i][7]}
            </div>
            <div class="item_rating">
                ${ratingStars}
            </div>
        </div>
    `;
    document.getElementById("menu_items_beverages_id").appendChild(node);
}


for (let i = 0; i < beverage.length; i++) {
    let beverage_item_count = 0;
    document.getElementById(`remove_item_beverage${i}`).addEventListener("click", () => {
        cart_items_total_amount-=beverage[i][7];
        console.log("kjednwkje")
        if (cart_items_total_count == 0) {
            document.getElementById("my_cart_id").style.display = "none"

        }
        if (beverage[i][4] > 0) {
            if (beverage_item_count > 0) {
                beverage_item_count--;

                cart_items_total_count--;
                if (beverage[i][4] > 1) {
                    beverage[i][4]--;
                    // cart_items[beverage[i][4]][4]--;
                    // cart_items_total_count--;
                    document.getElementById(`my_cart_item_count_id${i}`).innerHTML = beverage[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)

                    document.getElementById(`cart_count_beverage${i}`).innerHTML = beverage[i][4];
                }
                else {
                    beverage[i][4]--;
                    cart_items.pop();
                    document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${i}`))
                    // document.getElementById(`my_cart_item_count_id${i}`).innerHTML = beverage[i][4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count
                    //   console.log(cart_items)

                    document.getElementById(`cart_count_beverage${i}`).innerHTML = beverage[i][4];
                }

            }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
            document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
            document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
        }
    })
    document.getElementById(`add_item_beverage${i}`).addEventListener("click", () => {
        cart_items_total_amount+=beverage[i][7];
        beverage_item_count++;
        // console.log(cart_items)
        let i_can_add = 0;

        //    console.log(beverage_cart_items);
        for (let check = 0; check < cart_items.length; check++) {
            if (cart_items[check][1] === beverage[i][1]) {
                i_can_add = 1;
                cart_items_total_count++;
                beverage[i][4]++;
                document.getElementById(`my_cart_item_count_beverage_id${i}`).innerHTML = beverage[i][4];
                //  console.log( beverage[i][4])
            }


        }
        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        if (i_can_add == 0) {
            cart_items_total_count++;
            cart_items.push(beverage[i]);
            let user_added_cart = document.createElement("div")
            user_added_cart.classList.add("my_cart_item");
            user_added_cart.setAttribute("id", `my_cart_item_id${i}`)
            beverage[i][4]++;

            user_added_cart.innerHTML = `
  
            <div class="my_cart_food_info">
                <div class="my_cart_food_img">
                    <img src="${beverage[i][0]}" alt="${beverage[i][1]}"
                        height="50px" width="100px" class="rounded">
                </div>
                <div class="my_cart_food_details">
                    <span id="my_cart_food_item_name">  ${beverage[i][1]}</span>
                    <span id="my_cart_food_item_price">&#x20B9;  ${beverage[i][7]} each</span>
                </div>
            </div>
            <div class="my_cart_add_remove_item_cancel_btn">
                
                <div class="add_remove_my_cart_food_item">
                    <span class="my_cart_remove_item" id="my_cart_remove_item_beverage_id${i}"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem" height="1.5rem"
                            fill="currentColor" class="bi bi-dash"
                            viewBox="0 0 16 16">
                            <path
                                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg></span></span>
                    <span class="my_cart_item_count" id="my_cart_item_count_beverage_id${i}">${beverage[i][4]}</span>
                    <span class="my_cart_add_item" id="my_cart_add_item_beverage_id${i}"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem" height="1.5rem"
                            fill="currentColor" class="bi bi-plus"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg></span>
                </div>
            
     
    </div>`
            // document.getElementById('user_added_to_cart').appendChild(user_added_cart);

            // console.log(i)
            // console.log(cart_items.length)
            document.getElementById("user_added_cart_id").appendChild(user_added_cart);
        }


        document.getElementById("cart_item_count").innerHTML = cart_items_total_count
        document.getElementById(`cart_count_beverage${i}`).innerHTML = beverage[i][4];
        document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
        document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
        document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
    })
}
let show_cart = 0;
document.getElementById("sm_cart_div_id").addEventListener("click",()=>{
    const myCartElement = document.getElementById("my_cart_id");
    if (show_cart === 0) {
        document.getElementById("order_details").style.display = "none"
        document.getElementById("my_cart_item_info_id").style.display = "flex"
        document.getElementById("move_to_order_page_id").style.display = "block"
        document.getElementById("user_description").style.display = "none"
        document.getElementById("move_to_delivery_id").style.display = "none"
        document.getElementById("move_to_delivery_page_id").style.display = "none"
        document.getElementById("user_added_cart_id").style.display = "grid"
        document.getElementById("track_order_head").innerHTML = "My Cart"
        document.getElementById("delivery_details_id").style.display = "none"
        myCartElement.style.display = "block";
        if (cart_items_total_count == 0) {
            document.getElementById("my_cart_id").style.display = "none"

        }
        show_cart = 1;
        remove_item_from_cart_beverage();
        remove_item_from_cart_dessert();
        remove_item_from_cart_kebab();
        remove_item_from_cart_briyani();
        remove_item_from_cart_gravy();
        remove_item_from_cart_starter();
        remove_item_from_cart_soup();
        remove_item_from_cart_meal();
        remove_item_from_cart_recommended();
        remove_item_from_cart_comboo();
        add_item_from_cart_briyani();
        add_item_from_cart_gravy();
        add_item_from_cart_starter();
        add_item_from_cart_soup();
        add_item_from_cart_comboo();
        add_item_from_cart_meal();
        add_item_from_cart_recommended();
        add_item_from_cart_kebab();
        add_item_from_cart_dessert();
        add_item_from_cart_beverage();
    } else {
        myCartElement.style.display = "none";
        show_cart = 0;
    }
})
document.getElementById("home_cart_id").addEventListener("click", () => {
    const myCartElement = document.getElementById("my_cart_id");
    if (show_cart === 0) {
        document.getElementById("order_details").style.display = "none"
        document.getElementById("my_cart_item_info_id").style.display = "flex"
        document.getElementById("move_to_order_page_id").style.display = "block"
        document.getElementById("user_description").style.display = "none"
        document.getElementById("move_to_delivery_id").style.display = "none"
        document.getElementById("move_to_delivery_page_id").style.display = "none"
        document.getElementById("user_added_cart_id").style.display = "grid"
        document.getElementById("track_order_head").innerHTML = "My Cart"
        document.getElementById("delivery_details_id").style.display = "none"
        myCartElement.style.display = "block";
        if (cart_items_total_count == 0) {
            document.getElementById("my_cart_id").style.display = "none"

        }
        show_cart = 1;
        remove_item_from_cart_beverage();
        remove_item_from_cart_dessert();
        remove_item_from_cart_kebab();
        remove_item_from_cart_briyani();
        remove_item_from_cart_gravy();
        remove_item_from_cart_starter();
        remove_item_from_cart_soup();
        remove_item_from_cart_meal();
        remove_item_from_cart_recommended();
        remove_item_from_cart_comboo();
        add_item_from_cart_briyani();
        add_item_from_cart_gravy();
        add_item_from_cart_starter();
        add_item_from_cart_soup();
        add_item_from_cart_comboo();
        add_item_from_cart_meal();
        add_item_from_cart_recommended();
        add_item_from_cart_kebab();
        add_item_from_cart_dessert();
        add_item_from_cart_beverage();
    } else {
        myCartElement.style.display = "none";
        show_cart = 0;
    }
});

document.getElementById("my_cart_cancel_button").addEventListener("click", () => {
    document.getElementById("my_cart_id").style.display = "none";
    let remove_the_item_table = document.getElementById("order_details_items");
    let child = remove_the_item_table.lastElementChild;
    while (child) {
        remove_the_item_table.removeChild(child);
        child = remove_the_item_table.lastElementChild;
    }
});

function remove_item_from_cart_recommended() {

    const removeButtons = document.querySelectorAll("[id^='my_cart_remove_item_id']");
    removeButtons.forEach(removeButton => {
        if (!removeButton.hasListenerAttached) {
            removeButton.hasListenerAttached = true;
            removeButton.addEventListener("click", () => {
                const itemId = parseInt(removeButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
                 cart_items_total_amount-=cartItem[7];
                if (cartItem) {
                    if (cartItem[4] > 1 && cart_items_total_count > 0) {
                        cartItem[4]--;



                        cart_items_total_count--;
                        document.getElementById(`cart_count${itemId}`).innerHTML = cartItem[4];
                        document.getElementById(`my_cart_item_count_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    } else if (cartItem[4] >= 0 && cart_items_total_count > 0) {
                        cartItem[4] = 0;
                        // recommended_for_you[cartItem[4]][5]--


                        cart_items_total_count--;
                        cart_items.splice(cart_items.indexOf(cartItem), 1);
                        // console.log(cart_items)
                        document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${cartItem[5]}`))
                        // user_added_cart.setAttribute("id",`my_cart_item_id${i}`)
                        document.getElementById(`my_cart_item_id${cartItem[5]}`)
                        document.getElementById(`cart_count${itemId}`).innerHTML = cartItem[4];
                        // document.getElementById(`my_cart_item_count_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                        if (cart_items_total_count == 0) {
                            document.getElementById("my_cart_id").style.display = "none"

                        }

                    }



                }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
                document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
            });
        }
    });
}



function add_item_from_cart_recommended() {

    const addButtons = document.querySelectorAll("[id^='my_cart_add_item_id']");
    addButtons.forEach(addButton => {
        if (!addButton.hasListenerAttached) {
            addButton.hasListenerAttached = true;
            addButton.addEventListener("click", () => {
                const itemId = parseInt(addButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
              cart_items_total_amount+=cartItem[7]
                if (cartItem) {

                    cartItem[4]++;
                    cart_items_total_count++;
                    document.getElementById(`cart_count${itemId}`).innerHTML = cartItem[4];
                    document.getElementById(`my_cart_item_count_id${itemId}`).innerHTML = cartItem[4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
                    document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;


                }
            });
        }
    });
}

function remove_item_from_cart_meal() {

    const removeButtons = document.querySelectorAll("[id^='my_cart_remove_item_meal_id']");
    removeButtons.forEach(removeButton => {
        if (!removeButton.hasListenerAttached) {
            removeButton.hasListenerAttached = true;
            removeButton.addEventListener("click", () => {
                const itemId = parseInt(removeButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
                cart_items_total_amount-=cartItem[7]
                if (cartItem) {
                    if (cartItem[4] > 1 && cart_items_total_count > 0) {
                        cartItem[4]--;



                        cart_items_total_count--;
                        document.getElementById(`cart_count_meal${itemId}`).innerHTML = cartItem[4];
                        document.getElementById(`my_cart_item_count_meal_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    } else if (cartItem[4] >= 0 && cart_items_total_count > 0) {
                        cartItem[4] = 0;
                        // recommended_for_you[cartItem[4]][5]--


                        cart_items_total_count--;
                        cart_items.splice(cart_items.indexOf(cartItem), 1);
                        // console.log(cart_items)
                        document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${cartItem[5]}`))
                        // user_added_cart.setAttribute("id",`my_cart_item_id${i}`)
                        document.getElementById(`my_cart_item_id${cartItem[5]}`)
                        document.getElementById(`cart_count_meal${itemId}`).innerHTML = cartItem[4];
                        // document.getElementById(`my_cart_item_count_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                        if (cart_items_total_count == 0) {
                            document.getElementById("my_cart_id").style.display = "none"

                        }

                    }



                }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
                document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
            });
        }
    });
}



function add_item_from_cart_meal() {

    const addButtons = document.querySelectorAll("[id^='my_cart_add_item_meal_id']");
    addButtons.forEach(addButton => {
        if (!addButton.hasListenerAttached) {
            addButton.hasListenerAttached = true;
            addButton.addEventListener("click", () => {
                const itemId = parseInt(addButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
                cart_items_total_amount+=cartItem[7]
                if (cartItem) {

                    cartItem[4]++;
                    cart_items_total_count++;
                    document.getElementById(`cart_count_meal${itemId}`).innerHTML = cartItem[4];
                    document.getElementById(`my_cart_item_count_meal_id${itemId}`).innerHTML = cartItem[4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
                    document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;


                }
            });
        }
    });
}

function remove_item_from_cart_comboo() {

    const removeButtons = document.querySelectorAll("[id^='my_cart_remove_item_comboo_id']");
    removeButtons.forEach(removeButton => {
        if (!removeButton.hasListenerAttached) {
            removeButton.hasListenerAttached = true;
            removeButton.addEventListener("click", () => {
                const itemId = parseInt(removeButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
                cart_items_total_amount-=cartItem[7]
                if (cartItem) {
                    if (cartItem[4] > 1 && cart_items_total_count > 0) {
                        cartItem[4]--;



                        cart_items_total_count--;
                        document.getElementById(`cart_count_comboo${itemId}`).innerHTML = cartItem[4];
                        document.getElementById(`my_cart_item_count_comboo_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    } else if (cartItem[4] >= 0 && cart_items_total_count > 0) {
                        cartItem[4] = 0;
                        // recommended_for_you[cartItem[4]][5]--


                        cart_items_total_count--;
                        cart_items.splice(cart_items.indexOf(cartItem), 1);
                        // console.log(cart_items)
                        document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${cartItem[5]}`))
                        // user_added_cart.setAttribute("id",`my_cart_item_id${i}`)
                        document.getElementById(`my_cart_item_id${cartItem[5]}`)
                        document.getElementById(`cart_count_comboo${itemId}`).innerHTML = cartItem[4];
                        // document.getElementById(`my_cart_item_count_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                        if (cart_items_total_count == 0) {
                            document.getElementById("my_cart_id").style.display = "none"

                        }

                    }



                }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
                document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
            });
        }
    });
}



function add_item_from_cart_comboo() {

    const addButtons = document.querySelectorAll("[id^='my_cart_add_item_comboo_id']");
    addButtons.forEach(addButton => {
        if (!addButton.hasListenerAttached) {
            addButton.hasListenerAttached = true;
            addButton.addEventListener("click", () => {
                const itemId = parseInt(addButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
                cart_items_total_amount+=cartItem[7]
                if (cartItem) {

                    cartItem[4]++;
                    cart_items_total_count++;
                    document.getElementById(`cart_count_comboo${itemId}`).innerHTML = cartItem[4];
                    document.getElementById(`my_cart_item_count_comboo_id${itemId}`).innerHTML = cartItem[4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
                    document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;

                }
            });
        }
    });
}


function remove_item_from_cart_soup() {

    const removeButtons = document.querySelectorAll("[id^='my_cart_remove_item_soup_id']");
    removeButtons.forEach(removeButton => {
        if (!removeButton.hasListenerAttached) {
            removeButton.hasListenerAttached = true;
            removeButton.addEventListener("click", () => {
                const itemId = parseInt(removeButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
                cart_items_total_amount-=cartItem[7]
                if (cartItem) {
                    if (cartItem[4] > 1 && cart_items_total_count > 0) {
                        cartItem[4]--;



                        cart_items_total_count--;
                        document.getElementById(`cart_count_soup${itemId}`).innerHTML = cartItem[4];
                        document.getElementById(`my_cart_item_count_soup_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    } else if (cartItem[4] >= 0 && cart_items_total_count > 0) {
                        cartItem[4] = 0;
                        // recommended_for_you[cartItem[4]][5]--


                        cart_items_total_count--;
                        cart_items.splice(cart_items.indexOf(cartItem), 1);
                        // console.log(cart_items)
                        document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${cartItem[5]}`))
                        // user_added_cart.setAttribute("id",`my_cart_item_id${i}`)
                        document.getElementById(`my_cart_item_id${cartItem[5]}`)
                        document.getElementById(`cart_count_soup${itemId}`).innerHTML = cartItem[4];
                        // document.getElementById(`my_cart_item_count_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                        if (cart_items_total_count == 0) {
                            document.getElementById("my_cart_id").style.display = "none"

                        }

                    }



                }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
                document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
            });
        }
    });
}



function add_item_from_cart_soup() {

    const addButtons = document.querySelectorAll("[id^='my_cart_add_item_soup_id']");
    addButtons.forEach(addButton => {
        if (!addButton.hasListenerAttached) {
            addButton.hasListenerAttached = true;
            addButton.addEventListener("click", () => {
                const itemId = parseInt(addButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
                cart_items_total_amount+=cartItem[7]
                if (cartItem) {

                    cartItem[4]++;
                    cart_items_total_count++;
                    document.getElementById(`cart_count_soup${itemId}`).innerHTML = cartItem[4];
                    document.getElementById(`my_cart_item_count_soup_id${itemId}`).innerHTML = cartItem[4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;

                    document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
                }
            });
        }
    });
}


function remove_item_from_cart_starter() {

    const removeButtons = document.querySelectorAll("[id^='my_cart_remove_item_starter_id']");
    removeButtons.forEach(removeButton => {
        if (!removeButton.hasListenerAttached) {
            removeButton.hasListenerAttached = true;
            removeButton.addEventListener("click", () => {
                const itemId = parseInt(removeButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
                cart_items_total_amount-=cartItem[7]
                if (cartItem) {
                    if (cartItem[4] > 1 && cart_items_total_count > 0) {
                        cartItem[4]--;



                        cart_items_total_count--;
                        document.getElementById(`cart_count_starter${itemId}`).innerHTML = cartItem[4];
                        document.getElementById(`my_cart_item_count_starter_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    } else if (cartItem[4] >= 0 && cart_items_total_count > 0) {
                        cartItem[4] = 0;
                        // recommended_for_you[cartItem[4]][5]--


                        cart_items_total_count--;
                        cart_items.splice(cart_items.indexOf(cartItem), 1);
                        // console.log(cart_items)
                        document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${cartItem[5]}`))
                        // user_added_cart.setAttribute("id",`my_cart_item_id${i}`)
                        document.getElementById(`my_cart_item_id${cartItem[5]}`)
                        document.getElementById(`cart_count_starter${itemId}`).innerHTML = cartItem[4];
                        // document.getElementById(`my_cart_item_count_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                        if (cart_items_total_count == 0) {
                            document.getElementById("my_cart_id").style.display = "none"

                        }

                    }



                }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
                document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
            });
        }
    });
}



function add_item_from_cart_starter() {

    const addButtons = document.querySelectorAll("[id^='my_cart_add_item_starter_id']");
    addButtons.forEach(addButton => {
        if (!addButton.hasListenerAttached) {
            addButton.hasListenerAttached = true;
            addButton.addEventListener("click", () => {
                const itemId = parseInt(addButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
                cart_items_total_amount+=cartItem[7]
                if (cartItem) {

                    cartItem[4]++;
                    cart_items_total_count++;
                    document.getElementById(`cart_count_starter${itemId}`).innerHTML = cartItem[4];
                    document.getElementById(`my_cart_item_count_starter_id${itemId}`).innerHTML = cartItem[4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
                    document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;

                }
            });
        }
    });
}



function remove_item_from_cart_gravy() {

    const removeButtons = document.querySelectorAll("[id^='my_cart_remove_item_gravy_id']");
    removeButtons.forEach(removeButton => {
        if (!removeButton.hasListenerAttached) {
            removeButton.hasListenerAttached = true;
            removeButton.addEventListener("click", () => {
                const itemId = parseInt(removeButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
                cart_items_total_amount-=cartItem[7]
                if (cartItem) {
                    if (cartItem[4] > 1 && cart_items_total_count > 0) {
                        cartItem[4]--;



                        cart_items_total_count--;
                        document.getElementById(`cart_count_gravy${itemId}`).innerHTML = cartItem[4];
                        document.getElementById(`my_cart_item_count_gravy_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    } else if (cartItem[4] >= 0 && cart_items_total_count > 0) {
                        cartItem[4] = 0;
                        // recommended_for_you[cartItem[4]][5]--


                        cart_items_total_count--;
                        cart_items.splice(cart_items.indexOf(cartItem), 1);
                        // console.log(cart_items)
                        document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${cartItem[5]}`))
                        // user_added_cart.setAttribute("id",`my_cart_item_id${i}`)
                        document.getElementById(`my_cart_item_id${cartItem[5]}`)
                        document.getElementById(`cart_count_gravy${itemId}`).innerHTML = cartItem[4];
                        // document.getElementById(`my_cart_item_count_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                        if (cart_items_total_count == 0) {
                            document.getElementById("my_cart_id").style.display = "none"

                        }

                    }



                }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
                document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
            });
        }
    });
}



function add_item_from_cart_gravy() {

    const addButtons = document.querySelectorAll("[id^='my_cart_add_item_gravy_id']");
    addButtons.forEach(addButton => {
        if (!addButton.hasListenerAttached) {
            addButton.hasListenerAttached = true;
            addButton.addEventListener("click", () => {
                const itemId = parseInt(addButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
                cart_items_total_amount+=cartItem[7]
                if (cartItem) {

                    cartItem[4]++;
                    cart_items_total_count++;
                    document.getElementById(`cart_count_gravy${itemId}`).innerHTML = cartItem[4];
                    document.getElementById(`my_cart_item_count_gravy_id${itemId}`).innerHTML = cartItem[4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
                    document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;

                }
            });
        }
    });
}



function remove_item_from_cart_briyani() {

    const removeButtons = document.querySelectorAll("[id^='my_cart_remove_item_briyani_id']");
    removeButtons.forEach(removeButton => {
        if (!removeButton.hasListenerAttached) {
            removeButton.hasListenerAttached = true;
            removeButton.addEventListener("click", () => {
                const itemId = parseInt(removeButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
                cart_items_total_amount-=cartItem[7]
                if (cartItem) {
                    if (cartItem[4] > 1 && cart_items_total_count > 0) {
                        cartItem[4]--;



                        cart_items_total_count--;
                        document.getElementById(`cart_count_briyani${itemId}`).innerHTML = cartItem[4];
                        document.getElementById(`my_cart_item_count_briyani_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    } else if (cartItem[4] >= 0 && cart_items_total_count > 0) {
                        cartItem[4] = 0;
                        // recommended_for_you[cartItem[4]][5]--


                        cart_items_total_count--;
                        cart_items.splice(cart_items.indexOf(cartItem), 1);
                        // console.log(cart_items)
                        document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${cartItem[5]}`))
                        // user_added_cart.setAttribute("id",`my_cart_item_id${i}`)
                        document.getElementById(`my_cart_item_id${cartItem[5]}`)
                        document.getElementById(`cart_count_briyani${itemId}`).innerHTML = cartItem[4];
                        // document.getElementById(`my_cart_item_count_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                        if (cart_items_total_count == 0) {
                            document.getElementById("my_cart_id").style.display = "none"

                        }

                    }



                }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
                document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
            });
        }
    });
}



function add_item_from_cart_briyani() {

    const addButtons = document.querySelectorAll("[id^='my_cart_add_item_briyani_id']");
    addButtons.forEach(addButton => {
        if (!addButton.hasListenerAttached) {
            addButton.hasListenerAttached = true;
            addButton.addEventListener("click", () => {
                const itemId = parseInt(addButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
                cart_items_total_amount+=cartItem[7]
                if (cartItem) {

                    cartItem[4]++;
                    cart_items_total_count++;
                    document.getElementById(`cart_count_briyani${itemId}`).innerHTML = cartItem[4];
                    document.getElementById(`my_cart_item_count_briyani_id${itemId}`).innerHTML = cartItem[4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
                    document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;

                }
            });
        }
    });
}

function remove_item_from_cart_kebab() {

    const removeButtons = document.querySelectorAll("[id^='my_cart_remove_item_kebab_id']");
    removeButtons.forEach(removeButton => {
        if (!removeButton.hasListenerAttached) {
            removeButton.hasListenerAttached = true;
            removeButton.addEventListener("click", () => {
                const itemId = parseInt(removeButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
                cart_items_total_amount-=cartItem[7]
                if (cartItem) {
                    if (cartItem[4] > 1 && cart_items_total_count > 0) {
                        cartItem[4]--;



                        cart_items_total_count--;
                        document.getElementById(`cart_count_kebab${itemId}`).innerHTML = cartItem[4];
                        document.getElementById(`my_cart_item_count_kebab_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    } else if (cartItem[4] >= 0 && cart_items_total_count > 0) {
                        cartItem[4] = 0;
                        // recommended_for_you[cartItem[4]][5]--


                        cart_items_total_count--;
                        cart_items.splice(cart_items.indexOf(cartItem), 1);
                        // console.log(cart_items)
                        document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${cartItem[5]}`))
                        // user_added_cart.setAttribute("id",`my_cart_item_id${i}`)
                        document.getElementById(`my_cart_item_id${cartItem[5]}`)
                        document.getElementById(`cart_count_kebab${itemId}`).innerHTML = cartItem[4];
                        // document.getElementById(`my_cart_item_count_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                        if (cart_items_total_count == 0) {
                            document.getElementById("my_cart_id").style.display = "none"

                        }

                    }



                }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
                document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
            });
        }
    });
}



function add_item_from_cart_kebab() {

    const addButtons = document.querySelectorAll("[id^='my_cart_add_item_kebab_id']");
    addButtons.forEach(addButton => {
        if (!addButton.hasListenerAttached) {
            addButton.hasListenerAttached = true;
            addButton.addEventListener("click", () => {
                const itemId = parseInt(addButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
                cart_items_total_amount+=cartItem[7]
                if (cartItem) {

                    cartItem[4]++;
                    cart_items_total_count++;
                    document.getElementById(`cart_count_kebab${itemId}`).innerHTML = cartItem[4];
                    document.getElementById(`my_cart_item_count_kebab_id${itemId}`).innerHTML = cartItem[4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
                    document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;


                }
            });
        }
    });
}

function remove_item_from_cart_dessert() {

    const removeButtons = document.querySelectorAll("[id^='my_cart_remove_item_dessert_id']");
    removeButtons.forEach(removeButton => {
        if (!removeButton.hasListenerAttached) {
            removeButton.hasListenerAttached = true;
            removeButton.addEventListener("click", () => {
                const itemId = parseInt(removeButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
                cart_items_total_amount-=cartItem[7]
                if (cartItem) {
                    if (cartItem[4] > 1 && cart_items_total_count > 0) {
                        cartItem[4]--;



                        cart_items_total_count--;
                        document.getElementById(`cart_count_dessert${itemId}`).innerHTML = cartItem[4];
                        document.getElementById(`my_cart_item_count_dessert_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    } else if (cartItem[4] >= 0 && cart_items_total_count > 0) {
                        cartItem[4] = 0;
                        // recommended_for_you[cartItem[4]][5]--


                        cart_items_total_count--;
                        cart_items.splice(cart_items.indexOf(cartItem), 1);
                        // console.log(cart_items)
                        document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${cartItem[5]}`))
                        // user_added_cart.setAttribute("id",`my_cart_item_id${i}`)
                        document.getElementById(`my_cart_item_id${cartItem[5]}`)
                        document.getElementById(`cart_count_dessert${itemId}`).innerHTML = cartItem[4];
                        // document.getElementById(`my_cart_item_count_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                        if (cart_items_total_count == 0) {
                            document.getElementById("my_cart_id").style.display = "none"

                        }

                    }



                }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
                document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
            });
        }
    });
}



function add_item_from_cart_dessert() {

    const addButtons = document.querySelectorAll("[id^='my_cart_add_item_dessert_id']");
    addButtons.forEach(addButton => {
        if (!addButton.hasListenerAttached) {
            addButton.hasListenerAttached = true;
            addButton.addEventListener("click", () => {
                const itemId = parseInt(addButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
                cart_items_total_amount+=cartItem[7]
                if (cartItem) {

                    cartItem[4]++;
                    cart_items_total_count++;
                    document.getElementById(`cart_count_dessert${itemId}`).innerHTML = cartItem[4];
                    document.getElementById(`my_cart_item_count_dessert_id${itemId}`).innerHTML = cartItem[4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
                    document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;


                }
            });
        }
    });
}

function remove_item_from_cart_beverage() {

    const removeButtons = document.querySelectorAll("[id^='my_cart_remove_item_beverage_id']");
    removeButtons.forEach(removeButton => {
        if (!removeButton.hasListenerAttached) {
            removeButton.hasListenerAttached = true;
            removeButton.addEventListener("click", () => {
                const itemId = parseInt(removeButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
                cart_items_total_amount-=cartItem[7]
                if (cartItem) {
                    if (cartItem[4] > 1 && cart_items_total_count > 0) {
                        cartItem[4]--;



                        cart_items_total_count--;
                        document.getElementById(`cart_count_beverage${itemId}`).innerHTML = cartItem[4];
                        document.getElementById(`my_cart_item_count_beverage_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    } else if (cartItem[4] >= 0 && cart_items_total_count > 0) {
                        cartItem[4] = 0;
                        // recommended_for_you[cartItem[4]][5]--


                        cart_items_total_count--;
                        cart_items.splice(cart_items.indexOf(cartItem), 1);
                        // console.log(cart_items)
                        document.getElementById("user_added_cart_id").removeChild(document.getElementById(`my_cart_item_id${cartItem[5]}`))
                        // user_added_cart.setAttribute("id",`my_cart_item_id${i}`)
                        document.getElementById(`my_cart_item_id${cartItem[5]}`)
                        document.getElementById(`cart_count_beverage${itemId}`).innerHTML = cartItem[4];
                        // document.getElementById(`my_cart_item_count_id${itemId}`).innerHTML = cartItem[4];
                        document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                        if (cart_items_total_count == 0) {
                            document.getElementById("my_cart_id").style.display = "none"

                        }

                    }



                }  document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
                document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;
            });
        }
    });
}



function add_item_from_cart_beverage() {

    const addButtons = document.querySelectorAll("[id^='my_cart_add_item_beverage_id']");
    addButtons.forEach(addButton => {
        if (!addButton.hasListenerAttached) {
            addButton.hasListenerAttached = true;
            addButton.addEventListener("click", () => {
                const itemId = parseInt(addButton.id.match(/\d+/)[0]);
                const cartItem = cart_items.find(item => item[5] === itemId);
                cart_items_total_amount+=cartItem[7]
                if (cartItem) {

                    cartItem[4]++;
                    cart_items_total_count++;
                    document.getElementById(`cart_count_beverage${itemId}`).innerHTML = cartItem[4];
                    document.getElementById(`my_cart_item_count_beverage_id${itemId}`).innerHTML = cartItem[4];
                    document.getElementById("cart_item_count").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_id").innerHTML = cart_items_total_count;
                    document.getElementById("total_cart_items_amount_id").innerHTML=cart_items_total_amount;
                    document.getElementById("sm_cart_count").innerHTML=cart_items_total_count;



                }
            });
        }
    });
}

let delivery_amount=0;

let final_amount=0;
document.getElementById("move_to_order_page_id").addEventListener("click", () => {
    document.getElementById("track_order_head").innerHTML = "Order Details";
    document.getElementById("user_added_cart_id").style.display = "none";
    document.getElementById("my_cart_item_info_id").style.display = "none";
    document.getElementById("order_details").style.display = "block";
    document.getElementById("user_description").style.display = "block";
    document.getElementById("move_to_delivery_page_id").style.display = "block";
    document.getElementById("move_to_order_page_id").style.display = "none";
   let discount=0;
    for (let row = 0; row < cart_items.length; row++) {
        let row_data = document.createElement("tr");
        let row_data_items = document.createElement("td");
        let row_data_qty = document.createElement("td");
        let row_data_price = document.createElement("td");
        row_data_items.innerHTML = cart_items[row][1];
        row_data_qty.innerHTML = cart_items[row][4];
        row_data_price.innerHTML = cart_items[row][7] * cart_items[row][4];
        row_data.appendChild(row_data_items);
        row_data.appendChild(row_data_qty);
        row_data.appendChild(row_data_price);
        document.getElementById("order_details_items").appendChild(row_data);
        document.getElementById("sub_total_cart_items_amount_in_table").innerHTML=` &#x20B9; `+cart_items_total_amount;
        if(cart_items_total_amount<1000){
 discount=cart_items_total_amount*(5/100);
        }
       else if(cart_items_total_amount<2000){
            discount=cart_items_total_amount*(7/100);
        }
        else {
            discount=cart_items_total_amount*(10/100);
        }
        document.getElementById("discount_total_cart_items_in_table").innerHTML=` &#x20B9; `+Math.round(discount);
        document.getElementById("gst_for_cart_items").innerHTML=`&#x20B9; `+15;
        document.getElementById("total_cart_items_amount_in_table").innerHTML=` &#x20B9; `+(cart_items_total_amount-Math.round(discount)+15);
        document.getElementById("final_amount").innerHTML=` &#x20B9; `+(cart_items_total_amount-Math.round(discount)+15);
        delivery_amount=cart_items_total_amount-Math.round(discount)+15;
    }



})

document.getElementById("move_to_delivery_page_id").addEventListener("click", () => {
    document.getElementById("move_to_delivery_id").style.display = "block"
    document.getElementById("move_to_delivery_page_id").style.display = "none"
    document.getElementById("order_details").style.display = "none"
    document.getElementById("user_description").style.display = "none"
    document.getElementById("track_order_head").innerHTML = "Delivery to :"
    document.getElementById("delivery_details_id").style.display = "block"
document.getElementById("to_add_price_in_db").value = "123";
     

})
 
document.getElementById("change_address").addEventListener("click", () => {
 
        document.getElementById("user_address").removeAttribute('disabled');
        document.getElementById("change_address").style.border = "2px solid wheat";
        document.getElementById("change_address").style.display="none";
        document.getElementById("move_to_delivery_id").innerHTML="Save & Place order"
 
})




document.getElementById("payment_on_upi").addEventListener("click", () => {
    document.getElementById("net_banking").style.display = "none"
    document.getElementById("upi").style.display = "flex"
    document.getElementById("cash").style.display = "none"
    document.getElementById("credit_card").style.display = 'none';


})

document.getElementById("paymeny_on_credit_card").addEventListener("click", () => {
    document.getElementById("upi").style.display = "none"
    document.getElementById("net_banking").style.display = "none"
    document.getElementById("credit_card").style.display = 'block';
    document.getElementById("cash").style.display = "none"
})

document.getElementById("payment_on_net_banking").addEventListener("click", () => {
    document.getElementById("upi").style.display = "none"
    document.getElementById("net_banking").style.display = "block"
    document.getElementById("credit_card").style.display = 'none';
    document.getElementById("cash").style.display = "none"

})
document.getElementById("payment_on_cash_on_delivery").addEventListener("click", () => {
    document.getElementById("upi").style.display = "none"
    document.getElementById("net_banking").style.display = "none"
    document.getElementById("credit_card").style.display = 'none';
    document.getElementById("cash").style.display = "block"
})



document.getElementById("cancel_account_info_id").addEventListener("click", () => {
    document.getElementById("account_info_id").style.display = "none";
})
document.getElementById("account").addEventListener("click", () => {
    document.getElementById("account_info_id").style.display = "flex";
})
document.getElementById("display_account").addEventListener("click", () => {
    document.getElementById("account_info_id").style.display = "flex";
})

document.getElementById("edit_account_info_id").addEventListener("click", () => {
    document.getElementById("save_account_info_id").style.display = "block";
    document.getElementById("edit_account_info_id").style.display = "none";
    document.getElementById("account_info_username").removeAttribute("disabled")
    document.getElementById("account_info_password").removeAttribute("disabled")
    document.getElementById("account_info_phone").removeAttribute("disabled")
})
document.getElementById("save_account_info_id").addEventListener("click", () => {
    document.getElementById("save_account_info_id").style.display = "none";
    document.getElementById("edit_account_info_id").style.display = "block";
    document.getElementById("account_info_username").setAttribute('disabled', 'disabled')
    document.getElementById("account_info_password").setAttribute('disabled', 'disabled')
    document.getElementById("account_info_phone").setAttribute('disabled', 'disabled')
})
 

document.getElementById("nav_items_bar").addEventListener("click",()=>{
    
})

document.getElementById("nav_items_bar").addEventListener("click",()=>{
    document.getElementById("sm_nav_bar_id").style.display="block"
    document.getElementById("nav_items_bar").style.display= "none";
    document.getElementById("cross_id").style.display="block"


})
document.getElementById("cross_id").addEventListener("click",()=>{
    document.getElementById("cross_id").style.display="none"
    document.getElementById("sm_nav_bar_id").style.display="none"
    document.getElementById("nav_items_bar").style.display= "block";
})
document.getElementById("move_to_delivery_id").addEventListener("click",()=>{


let store_in_database='';
 for(i=0;i<cart_items.length;i++)
 {
   store_in_database += cart_items[i][1];
    if (i !== cart_items.length - 1) {
        store_in_database += ", ";  
    }
 }
 
  
 console.log(store_in_database);
 document.getElementById("store_in_database").innerHTML=store_in_database;

 
})

document.getElementById("button_text").addEventListener("click",()=>{
	document.getElementById("button_text").innerHTML="Table Reserved"
})

 
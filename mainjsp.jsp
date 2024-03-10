<%@page import="java.sql.ResultSet"%>
<%@page import="com.dk.daofile"%>
<%@page import="org.apache.jasper.tagplugins.jstl.core.If"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <!-- food images from https://unsplash.com/s/photos/seasoning?orientation=landscape -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="maincss.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://kit.fontawesome.com/e96d258b08.js" crossorigin="anonymous"></script>
</head>

<body>

<%
response.setHeader("Cache-Control", "no-cache,no-store,must-revalidata");
 response.setHeader("pragma","no-cache");
response.setHeader("Expires", "0");

if(session.getAttribute("email")==null){
	response.sendRedirect("login.jsp");
}

%>
    <main>
        <div class="container-fluid">
            <div class="row navigation">
                <div class="header_navigation">
                    <div class="logo_name">
                        <img src="/restaurant/images/master-chef-logo-removebg-preview.png" alt="Master-chef-logo" id="master_chef_logo">
                        <h2>Master Chef</h2>
                    </div>
                    <div class="navigation_items">
                        <a href="#">Home</a>
                        <a href="#food_id">Food</a>

                        <span id="nav_item_contact"><a href="#reservation_name_id">Book Table</a></span>
                        <a href="#">
                            <div class="home_cart" id="home_cart_id"> <span id="cart_head">Cart <svg
                                        xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem"
                                        fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                        <path
                                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                    </svg></span> <span id="cart_item_count">0</span></div>
                        </a>

                    </div>
                     <nav class="sm_nav_bar" id="sm_nav_bar_id">
                    
                            <ul id="sm_nav_items">
                                <li><a class="active" href="#home">Home</a></li>
                                <li><a href="#news">Menu</a></li>
                                <li><a href="#contact">Book Table online</a></li>
                                <li><a href="">About us</a></li>
                                <li><a href="#about">Contact us</a></li>
                                <li><a href="">Account</a></li>
                                <li><a href="">Logout</a></li>
                              </ul>
                     


                    </nav>
                   
                    <div class="customer_account" id="customer_account_id"> 
                        <span id="account">Account</span>
                        <span id="nav_items_bar"><i class="fa-solid fa-bars"></i></span>
                         <div class="cross" id="cross_id">
                            <div class="cross1"></div>
                            <div class="cross2"></div>
                            
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-person" viewBox="0 0 16 16"  id="display_account">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg> 
                    </div>
                </div>


            </div>
        </div>

        </div>
        <div class="container-fluid">
            <!-- <div class="home_animation1"></div> -->
            <div class="row home_main">

                <div class="home">
                    <div class="home_content">
                        <span id="home_content1">We Make Ordering</span>
                        <span id="home_content2">Food Easy..!</span>
                        <span id="home_content3">Hungry! You're in the right place</span>
                        <!-- <span id="login_home_id"> Log in </span> -->
                    </div>
                    <div class="home_search">
                        <input type="text" placeholder="Briyani" id="home_search_input">
                        <div id="home_search_icon">Search</div>
                    </div>

                </div>
                <div class="home_image">

                    <img src="/restaurant/images/pizza-removebg-preview.png" alt="pizza" id="home_pizza">
                    <!-- <img src="knife-removebg-preview.png" alt="knife" id="home_knife"> -->
                    <img src="/restaurant/images/annapoorani-removebg-preview.png" alt="Chef Sudha" height="300px" id="chef_annapoorani">
                </div>

            </div>
            <!-- <div class="home_animation2"></div> -->

        </div>
        <div class="container-fluid">

            <div class="row food" id="food_id">
                <div class="food_items">
                    <div class="food_item_head">
                        <img src="/restaurant/images/ninja-removebg-preview.png" alt="ninja" id="ninja1">
                        <p id="food_item_head_name">Food items</p>
                        <img src="/restaurant/images/ninja-removebg-preview.png2.png" alt="ninja" id="ninja2">
                    </div>
                    <div class="food_popular_items">
                        <p>Most Popular Items</p>
                    </div>
                </div>
                <div class="food_timings">
                    <div class="breakfast">
                        <div class="food_timings_icon">
                            <i class="fa-solid fa-mug-saucer fa-2xl" style="color: #f4cc97;"></i>
                        </div>
                        <div>
                            <p> Fresh <br><b>Breakfast</b>
                            </p>

                        </div>
                    </div>
                    <div class="lunch">
                        <div class="food_timings_icon"> <i class="fa-solid fa-burger fa-2xl" style="color: #f4cc97;"
                                class="food_item1"></i></div>
                        <div>
                            <p> Spicy <br><b>Lunch</b>
                            </p>
                        </div>
                    </div>
                    <div class="dinner">
                        <div class="food_timings_icon">
                            <i class="fa-solid fa-utensils fa-2x" style="color: #f4cc97;" class="food_item1"></i>
                        </div>
                        <div>
                            <p> Lovely <br> <b>Dinner</b>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="add_to_cart">
            <span id="remove_item">-</span>
            <span id="item_in_cart">0</span>
            <span id="add_item">+</span>
        </div>
        <div class="container-fluid  ">
            <div class="row menu   ">
                <div class="menu_catagory">
                    <div class="catagory_head" id="catagory_head_id"><span>Catagory</span></div>
                    <div class="menu_list">
                        <a href="#height_manage1">

                            <div class="menu_list1" id="menu_list_id1">Recommended for you</div>
                        </a>
                        <a href="#height_manage2">
                            <div class="menu_list2" id="menu_list_id2">Combo</div>
                        </a>
                        <a href="#height_manage3">
                            <div class="menu_list3" id="menu_list_id3">Meals</div>
                        </a>
                        <a href="#height_manage4">
                            <div class="menu_list4" id="menu_list_id4">Soups</div>
                        </a>
                        <a href="#height_manage5">
                            <div class="menu_list5" id="menu_list_id5">Starters</div>
                        </a>
                        <a href="#height_manage6">
                            <div class="menu_list6" id="menu_list_id6">Curries & Gravies</div>
                        </a>
                        <a href="#height_manage7">

                            <div class="menu_list7" id="menu_list_id7">Briyani</div>
                        </a>
                        <a href="#height_manage8">
                            <div class="menu_list8" id="menu_list_id8">Kebabs & Barbeque</div>
                        </a>
                        <a href="#height_manage9">
                            <div class="menu_list9" id="menu_list_id9">Desserts</div>
                        </a>
                        <a href="#height_manage10">
                            <div class="menu_list10" id="menu_list_id10">Beverages</div>
                        </a>
                    </div>
                </div>
                <div class="menu_items">
                    <div class="recommended" id="recommended_id">
                        <div id="height_manage1"></div>
                        <section class="recommended_head" id="recommended_head_id">

                            <span>Recommended for you</span>


                        </section>
                        <div class="menu_items_recommended" id="menu_items_recommended_id">


                        </div>
                        <div class="comboo" id="comboo_id">
                            <div id="height_manage2"></div>
                            <div class="comboo_head" id="comboo_head_id">
                                <span>Comboo</span>


                            </div>
                            <div class="menu_items_comboo" id="menu_items_comboo_id">
                            </div>
                            <div class="meal" id="meal_id">
                                <div id="height_manage3"></div>
                                <div class="meal_head" id="meal_head_id">
                                    <span>Meal</span>


                                </div>
                                <div class="menu_items_meal" id="menu_items_meal_id">

                                </div>
                                <div class="soup" id="soup_id">
                                    <div id="height_manage4"></div>
                                    <div class="soup_head" id="soup_head_id">
                                        <span>Soups</span>


                                    </div>
                                    <div class="menu_items_soup" id="menu_items_soup_id">

                                    </div>
                                    <div class="starter" id="starter_id">
                                        <div id="height_manage5"></div>
                                        <section class="starter_head" id="starter_head_id">
                                            <span> Starters</span>
                                        </section>
                                        <div class="menu_items_starter" id="menu_items_starter_id">



                                        </div>
                                        <div class="gravy" id="gravy_id">
                                            <div id="height_manage6"></div>
                                            <div class="gravy_head" id="gravy_head_id">
                                                <span>
                                                    Curry & Gravy
                                                </span>


                                            </div>
                                            <div class="menu_items_gravy" id="menu_items_gravy_id">
                                            </div>
                                            <div class="briyani" id="briyani_id">
                                                <div id="height_manage7"></div>
                                                <div class="briyani_head" id="briyani_head_id">
                                                    <span>Briyani</span>

                                                </div>
                                                <div class="menu_items_briyani" id="menu_items_briyani_id">


                                                </div>


                                                <div class="kebab" id="kebab_id">
                                                    <div id="height_manage8"></div>
                                                    <div class="kebab_head" id="kebab_head_id">
                                                        <span>Kebabs & Barbeque</span>


                                                    </div>
                                                    <div class="menu_items_kebab" id="menu_items_kebab_id">



                                                    </div>
                                                </div>
                                                <div class="dessert" id="dessert_id">
                                                    <div id="height_manage9"></div>
                                                    <div class="dessert_head" id="dessert_head_id">
                                                        <span>Desserts</span>


                                                    </div>
                                                    <div class="menu_items_dessert" id="menu_items_dessert_id">


                                                    </div>

                                                    <div class="beverages" id="beverages_id">
                                                        <div id="height_manage10"></div>
                                                        <div class="beverages_head" id="beverages_head_id">
                                                            <span>Beverages</span>


                                                        </div>
                                                        <div class="menu_items_beverages" id="menu_items_beverages_id">

                                                        </div>
                                                        <div class="menu_button">
                                                            <div class="menu_list_for_md" id="menu_list_for_md_id">
                                                                <a href="#height_manage1" id="menu_list_a1">
                                                                    <div class="menu_list1" id="menu_list_id1">
                                                                        Recommended for you</div>
                                                                </a>
                                                                <a href="#height_manage2">
                                                                    <div class="menu_list2" id="menu_list_id2">Combo
                                                                    </div>
                                                                </a>
                                                                <a href="#height_manage3">
                                                                    <div class="menu_list3" id="menu_list_id3">Meals
                                                                    </div>
                                                                </a>
                                                                <a href="#height_manage4">
                                                                    <div class="menu_list4" id="menu_list_id4">Soups
                                                                    </div>
                                                                </a>
                                                                <a href="#height_manage5">
                                                                    <div class="menu_list5" id="menu_list_id5">Starters
                                                                    </div>
                                                                </a>
                                                                <a href="#height_manage6">
                                                                    <div class="menu_list6" id="menu_list_id6">Curries &
                                                                        Gravies</div>
                                                                </a>
                                                                <a href="#height_manage7">

                                                                    <div class="menu_list7" id="menu_list_id7">Briyani
                                                                    </div>
                                                                </a>
                                                                <a href="#height_manage8">
                                                                    <div class="menu_list9" id="menu_list_id9">Kebabs &
                                                                        Barbeque</div>
                                                                </a>
                                                                <a href="#height_manage9">
                                                                    <div class="menu_list10" id="menu_list_id10">
                                                                        Desserts</div>
                                                                </a>
                                                                <a href="#height_manage10">

                                                                    <div class="menu_list11" id="menu_list_id11">
                                                                        Beverages</div>
                                                                </a>
                                                            </div>
                                                            <button id="menu_button_id"> <i
                                                                    class="fa-solid fa-utensils fa-sm"
                                                                    style="color: #fefbf8;" id="fork_icon_id"></i><span
                                                                    id="Menu_close_id">Menu</span></button>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="container" id="my_cart_id">
                                                    <div class="row my_cart ">
                                                        <div class="cancel_button" id="my_cart_cancel_button">
                                                            &#x274C;
                                                        </div>
                                                        <div class="tracking_order">
                                                            <div class="track_my_cart">
                                                                <div class="track_my_cart_area">
                                                                    <div class="track_my_cart_icon"><svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="15" height="15" fill="currentColor"
                                                                            class="bi bi-cart-check-fill"
                                                                            viewBox="0 0 16 16">
                                                                            <path
                                                                                d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708" />
                                                                        </svg></div>

                                                                </div>
                                                                <span class="track_order_name">My Cart</span>
                                                            </div>
                                                            <div class="track_my_order">
                                                                <div class="track_my_order_area">
                                                                    <div class="track_my_order_icon"> <img
                                                                            src="/restaurant/images/food-tray.png" alt="food_order"
                                                                            height="18px"></div>

                                                                </div>
                                                                <span class="track_order_name">Order Details</span>
                                                            </div>
                                                            <div class="track_delivery">
                                                                <div class="track_delivery_area">
                                                                    <div class="track_delivery_icon"> <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="15" height="15" fill="currentColor"
                                                                            class="bi bi-truck" viewBox="0 0 16 16">
                                                                            <path
                                                                                d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                                                                        </svg></div>

                                                                </div>
                                                                <span class="track_order_name">Delivery</span>
                                                            </div>


                                                        </div>
                                                        <div class="my_cart_head">
                                                            <span id="track_order_head"> My Cart</span>
                                                        </div>
                                                        <div class="user_added_cart" id="user_added_cart_id">


                                                        </div>
                                                        <div id="order_details">
                                                            <table class="table table-striped">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Item</th>
                                                                        <th>Quantity</th>
                                                                        <th>Price</th>

                                                                    </tr>
                                                                </thead>
                                                                <tbody id="order_details_items">

                                                                </tbody>
                                                                <tfoot>
                                                                    <tr>
                                                                        <td colspan="2" align="end"
                                                                            style="padding-right: 50px;">Sub-Total</td>
                                                                        <td id="sub_total_cart_items_amount_in_table">Rs.0.00</td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="2" align="end"
                                                                            style="padding-right: 50px;">Discount</td>
                                                                        <td id="discount_total_cart_items_in_table"> - 0.00</td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="2" align="end"
                                                                            style="padding-right: 50px;">GST</td>
                                                                        <td id="gst_for_cart_items">+ 0.00</td>

                                                                    </tr>

                                                                    <tr>
                                                                        <td colspan="2" align="end"
                                                                            style="padding-right: 50px;">Total</td>
                                                                        <td id="total_cart_items_amount_in_table">Rs.0.00</td>

                                                                    </tr>

                                                                </tfoot>

                                                            </table>
                                                              
                                                        </div>
                                                        <div class="delivery_details" id="delivery_details_id">
                                                            <form action="deliveryServlet" method="post">
                                                                <div class="delivery_to">
                                                                    <div class="delivery_address">
                                                                        <span id="address">Address :</span><br>
                                                                        <textarea name="user_address_to_delivery" id="user_address"
                                                                            >46A,Meiyanndapatty(vill),Hanumantheertham(post),Uthangarai(tk),Krishnagiri(dt), 636902</textarea>
                                                                    </div>
                                                                     <textarea id="store_in_database" name="items_ordered">

                                                                </textarea>
                                                                                                       
                                                              
                                                                
                                                                  <div id="change_address"><i class="fas fa-edit " style="color: #f90b0b;"></i> Edit</div>
                                                                </div>
                                                                <div class="price_details">

                                                                    <div><b>Total Amount</b></div>
                                                                    <div id="final_amount" name="final_amount_delivery">0.00</div>


                                                                </div>
                                                                <div class="payment_details">
                                                                    <div class="payment_mode ">
                                                                        Payment mode
                                                                        <div id="payment_on_upi" class="mode"> <img
                                                                                src="https://e7.pngegg.com/pngimages/795/596/png-clipart-logo-line-angle-brand-line-angle-triangle.png"
                                                                                alt="UPI" height="15px" width="15px">
                                                                            UPI
                                                                        </div>
                                                                        <div id="paymeny_on_credit_card" class="mode">
                                                                            <img src="https://e7.pngegg.com/pngimages/48/549/png-clipart-swipe-card-icon-credit-card-bank-card-debit-card-money-card-card-material-blue-text.png"
                                                                                alt="CARD" height="15px" width="15px">
                                                                            Credit/Debit Card

                                                                        </div>
                                                                        <div id="payment_on_net_banking" class="mode">
                                                                            <img src="https://c1.klipartz.com/pngpicture/273/633/sticker-png-bank-logo-organization-online-banking-training-job-probate-court-recruitment.png"
                                                                                alt="BANK" height="15px" width="15px">
                                                                            Net Banking

                                                                        </div>
                                                                        <div id="payment_on_cash_on_delivery"
                                                                            class="mode"> <img
                                                                                src="https://www.pikpng.com/pngl/m/83-831667_house-moving-svg-png-icon-free-download-cash.png"
                                                                                alt="CASH" height="15px" width="15px">
                                                                            Cash on Delivery


                                                                        </div>


                                                                    </div>
                                                                    <div class="payment_page" id="payment_page_id">
                                                                        <div id="upi">
                                                                            <img src="/restaurant/images/qr.png" alt="qr" height="150px"
                                                                                width="150px">
                                                                        </div>
                                                                        <div id="net_banking">
                                                                            <div class="iob">
                                                                                <input type="radio">
                                                                                <label for="">Indian Overseas
                                                                                    Bank</label>
                                                                            </div>
                                                                            <div class="sbi">
                                                                                <input type="radio">
                                                                                <label for="">State Bank of
                                                                                    India</label>
                                                                            </div>
                                                                            <div class="hdfc">
                                                                                <input type="radio" name="" id="">
                                                                                <label for="">HDFC Bank</label>
                                                                            </div>

                                                                        </div>
                                                                        <div id="cash">
                                                                            <img src="https://png.pngtree.com/png-clipart/20210530/original/pngtree-cash-on-delivery-icon-png-image_6344233.jpg"
                                                                                alt="" height="150px" width="150px">

                                                                        </div>

                                                                        <div id="credit_card">
                                                                            <div class="card_number">
                                                                                <label for="">Card Number</label> <br>
                                                                                <input type="number"
                                                                                    placeholder="xxxx xxxx xxxx xxxx">
                                                                            </div>
                                                                            <div class="credit_cvv">
                                                                                <div class="valid">
                                                                                    <label for="">Valid</label>
                                                                                    <input type="data"
                                                                                        placeholder="dd/mm/yy">
                                                                                </div>
                                                                                <div class="cvv">
                                                                                    <label for="">Cvv</label>
                                                                                    <input type="number"
                                                                                        placeholder="cvv">
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                        
                                                        </div>
                                                        <div id="user_description">
                                                            <textarea name="user_description" id="user_description_area" rows="2"
                                                                placeholder="Enter Description about items"></textarea>
                                                        </div>
                                                        <div class="my_cart_item_info" id="my_cart_item_info_id">
                                                            <div class="total_cart_items">Total of <span
                                                                    id="total_cart_items_id">0</span> items</div>
                                                            <div class="total_cart_items_amount"> Amount $ <span
                                                                    id="total_cart_items_amount_id">0</span></div>
                                                        </div>
                                                        <div class="move_to_order_page">
                                                            <div id="move_to_order_page_id">Next <svg
                                                                    xmlns="http://www.w3.org/2000/svg" width="16"
                                                                    height="16" fill="currentColor"
                                                                    class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd"
                                                                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                                                </svg></div>
                                                            <div id="move_to_delivery_page_id">Next <svg
                                                                    xmlns="http://www.w3.org/2000/svg" width="16"
                                                                    height="16" fill="currentColor"
                                                                    class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd"
                                                                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                                                </svg></div>
                                                             <textarea id="to_add_price_in_db" name="price"></textarea>
                                                            <button id="move_to_delivery_id" type="submit"> Place Order </button>
                                                               </form>
                                                        </div>

                                                    </div>
                                                </div>


                                            </div>


    </main>
    <!-- <div class="container"> -->
    <div class="reservation_name" id="reservation_name_id">
        Reservation
    </div>
    <div class="book_my_table_page">
        <div class="book_my_table_img">
            <img src="https://th-i.thgim.com/public/news/cities/mumbai/vl6q6a/article67238140.ece/alternates/FREE_1200/AI-generated%20Image%2C%20%28MindJourney%29%20-%20An%20Onam%20Feast.png"
                class="rounded" alt="book my table" height="90%" width="100%">
        </div>
        <div class="book_my_table">

            <div class="book_online_name">
                Book a Table Online
            </div>
            <div class="reservation_details">
                <form action="tableBookingServlet" method="post">

                    <div id="user_details">
                        <div id="user_name_input_div">
                            <input type="text" name="reservation_name" required>
                            <div class="input_underline">
                            </div>
                            <label for="">Name</label>
                        </div>
                        <div id="email_input_div">
                            <input type="date" required name="reservation_date" style="text-indent:30px;">
                            <div class="input_underline" type="Password">
                            </div>
                            <label for="">Date</label>
                        </div>
                    </div>
                    <div id="date_time_num">
                        <div id="date_time_input_div">
                            <input type="time" required name="reservation_time">
                            <div class="input_underline">
                            </div>
                            <label for="">Time</label>
                        </div>
                        <div id="noOfPeople_input_div">
                            <input type="number" required name="reservation_count">
                            <div class="input_underline">
                            </div>
                            <label for="">No of People</label>
                        </div>

                    </div>
                    <div id="reservation_description">
                        Special Request
                        <div id="resvation_request_input_div">
                            <textarea type="text" required name="reservation_req">Special  Requests (optional)</textarea>


                        </div>
                    </div>
                    <div class="reservation_submit">
  <button type="submit" id="book_table_submit">
        <span id="button_text">Book now</span>
    </button>

                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- </div> -->
    <div class="team_head" id="team_head_id">
        Our Master Chefs
    </div>
    <!-- <div class="team_members"> -->

    <div class="chef_details">
        <div class="chef_div">
            <div class="chef_div1">
                <div class="chef_img">
                    <i class="fa-solid fa-user-tie fa-8x" style="color: #dcd6d6;"></i>
                </div>
                <div class="chef_name">
                    <div class="chef_name1">Deepakkumar</div>
                    <div class="">Owner</div>
                </div>

            </div>
            <div class="chef_div2">
                <div class="chef_info">
                    <span id="info_name">Info:</span> <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui mollitia atque persp
                </div>
                <div class="chef_social_media">
                    <i class="fa-brands fa-whatsapp" style="color: #3cf00a;"></i>
                    <i class="fa-brands fa-linkedin-in" style="color: #74C0FC;"></i>
                    <i class="fa-brands fa-instagram" style="color: #fb0ea4;"></i>
                    <i class="fa-regular fa-envelope"></i>
                </div>
            </div>

        </div>
        <div class="chef_div">
            <div class="chef_div1">
                <div class="chef_img">
                    <i class="fa-solid fa-user-tie fa-8x" style="color: #dcd6d6;"></i>
                </div>
                <div class="chef_name">
                    <div class="chef_name1">Sudha</div>
                    <div class="">Cheif Chef</div>
                </div>
            </div>
            <div class="chef_div2">

                <div class="chef_info">
                    <span id="info_name">Info:</span> <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui mollitia atque persp
                </div>
                <div class="chef_social_media">
                    <i class="fa-brands fa-whatsapp" style="color: #3cf00a;"></i>
                    <i class="fa-brands fa-linkedin-in" style="color: #74C0FC;"></i>
                    <i class="fa-brands fa-instagram" style="color: #fb0ea4;"></i>
                    <i class="fa-regular fa-envelope"></i>
                </div>

            </div>
        </div>
        <div class="chef_div">
            <div class="chef_div1">
                <div class="chef_img">
                    <i class="fa-solid fa-user-tie fa-8x" style="color: #dcd6d6;"></i>
                </div>
                <div class="chef_name">
                    <div class="chef_name1">Deepika</div>
                    <div class="">Manager</div>
                </div>
            </div>
            <div class="chef_div2">
                <div class="chef_info">
                    <span id="info_name">Info:</span> <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui mollitia atque persp
                </div>
                <div class="chef_social_media">
                    <i class="fa-brands fa-whatsapp" style="color: #3cf00a;"></i>
                    <i class="fa-brands fa-linkedin-in" style="color: #74C0FC;"></i>
                    <i class="fa-brands fa-instagram" style="color: #fb0ea4;"></i>
                    <i class="fa-regular fa-envelope"></i>
                </div>
            </div>
        </div>
        <div class="chef_div">
            <div class="chef_div1">
                <div class="chef_img">
                    <i class="fa-solid fa-user-tie fa-8x" style="color: #dcd6d6;"></i>
                </div>
                <div class="chef_name">
                    <div class="chef_name1">Selvam</div>
                    <div class="">Supervisor</div>
                </div>

            </div>
            <div class="chef_div2">
                <div class="chef_info">
                    <span id="info_name">Info:</span> <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui mollitia atque persp
                </div>
                <div class="chef_social_media">
                    <i class="fa-brands fa-whatsapp" style="color: #3cf00a;"></i>
                    <i class="fa-brands fa-linkedin-in" style="color: #74C0FC;"></i>
                    <i class="fa-brands fa-instagram" style="color: #fb0ea4;"></i>
                    <i class="fa-regular fa-envelope"></i>
                </div>
            </div>
        </div>
        <!-- </div> -->
    </div>
    <footer>
        <div class="restaurant_footer" id="restaurant_footer_id">

            <div class="company">
                <div class="company_head">Company</div>
                <div class="company_list">
                    <a href="#"> <i class="fa-solid fa-greater-than"></i> Home</a>
                    <a href="#food_id"> <i class="fa-solid fa-greater-than"></i> Menu</a>
                    <a href="#reservation_name_id"> <i class="fa-solid fa-greater-than"></i> Book a Table Online</a>
                    <a href="#team_head_id"> <i class="fa-solid fa-greater-than"></i> Team Members</a>
                    <a href=""> <i class="fa-solid fa-greater-than"></i> Privacy Policy</a>
                    <a href=""> <i class="fa-solid fa-greater-than"></i> Terms & Condition</a>
                </div>
            </div>
            <div class="contact">
                <div class="contact_head">
                    Contact
                </div>
                <div class="contact_list">
                    <a href=""> <i class="fa-solid fa-location-dot" style="color: #FFD43B;"></i> 46A ,Meiyanndapatty
                        ,Hmt</a>
                    <a href=""> <i class="fa-solid fa-phone" style="color: #FFD43B;"></i> +919087729108</a>
                    <a href=""> <i class="fa-regular fa-envelope" style="color: #FFD43B;"></i> 717822p212@kce.ac.in</a>
                    <div class="footer_social_media">
                        <i class="fa-brands fa-whatsapp" style="color: #3cf00a;"></i>
                        <i class="fa-brands fa-linkedin-in" style="color: #74C0FC;"></i>
                        <i class="fa-brands fa-instagram" style="color: #fb0ea4;"></i>
                        <i class="fa-brands fa-twitter" style="color: #74C0FC;"></i>
                        <i class="fa-brands fa-youtube" style="color: #ff1100;"></i>
                    </div>
                </div>
            </div>
            <div class="opening">
                <div class="opening_head">
                    Opening
                </div>
                <div class="opening1">Monday - Saturday <br> 09AM - 09PM</div>
                <div class="opening2">Sunday <br>10AM - 08PM</div>
            </div>
            <div class="newsletter">
                <div class="newsletter_head">
                    Newsletter
                </div>

                <div class="">
                    <ul>
                        <li>Food is my love language,
                            Indulging in flavors that make life delicious. </li>
                        <li>Sundays are made for brunch and good vibes</li>
                    </ul>
                </div>
                <div class="sign_up_btn">
                    <input type="email" placeholder="Email">
                    <label for="">Signup</label>
                </div>
            </div>
        </div>
        <div class="copyright">

            &#169;DK | All rights are Reserved

        </div>
    </footer>
    <div class="account_info" id="account_info_id">
       
        <div class="cancel_account_info">
           <button id="cancel_account_info_id"> &#x274C;</button>
        </div>
        <div class="account_info_name">
            Account Information
        </div>
        <form action="accountServlet" id="user_account_form" method="post">
        <div class="user_account_info">
            <div class="username">
                <label for="">Username</label>
                <textarea name="account_info_userName" id="account_info_username"    ><%= session.getAttribute("userName") %></textarea>
            </div>
            <div class="email">
                <label for="">Email</label>
                <textarea name="account_info_email" id="account_info_email"  ><%= session.getAttribute("email") %></textarea>
            </div>
            <div class="password">
                <label for="">Password</label>
                <textarea name="account_info_password" id="account_info_password" ><%= session.getAttribute("password") %></textarea>
            </div>
            <div class="phone">
                <label for="">Phone Number</label>
                <textarea name="account_info_phoneNumber" id="account_info_phone" ><%=session.getAttribute("phoneNumber")%></textarea>
            </div>
           <div class="edit_account_info">
            <div id="edit_account_info_id" >Edit <i class="fas fa-edit" style="color: #f2eded;"></i></div>
                <button id="save_account_info_id" type="submit">Save</button>
           </div>
         
            <div class="user_history_of_order">
           <div class="history_name">
            History  of Order
           </div>
              <table class=" table table-striped">
                    <thead>
                        <th>Sno</th>
                        <th>Date</th>
                        <th>Items</th>
                        <th>Amount(Rs.)</th>
                    </thead>
                    <tbody>
                    <% daofile dao=new daofile();
                         ResultSet rs= dao.to_return_order_history((String)session.getAttribute("email"));
                          %>
                          <%  while(rs.next()){ %>
                        <tr>
                        <td><%rs.getDate(2); %></td>
                        <td><%rs.getDate(2); %></td>
                        <td> <%rs.getString(4); %></td>
                        <td><%rs.getInt(3); %></td>
                    </tr>
                    <%} %>
                   

                    </tbody>
              </table>
                
            </div>
                </form>
          
            <div class="account_logout">
            <form action="logoutServlet">
                <button type="submit"> <i class="fas fa-sign-out" style="color: #f2f2f2;"></i> Log out</button>
                </form>
            </div>
            

        </div>
    
      <div class="sm_cart_div" id="sm_cart_div_id">
        <div class="sm_cart">
            <span id="sm_cart_count">0</span> items added <i class="fa-solid fa-arrow-right"
                style="color: #f5f5f5;"></i>
        </div>
    </div>
</body>
<script src="mainjs.js"></script>

</html>
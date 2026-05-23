import tomato from "../assets/products/tomato.jpg";
import carrot from "../assets/products/carrot.jpg";
import spinach from "../assets/products/spinach.jpg";
import mango from "../assets/products/mango.jpg";
import potato from "../assets/products/potato.jpg"
import banana from "../assets/products/banana.jpg"
import milk from "../assets/products/milk.jpg"
import rice from "../assets/products/rice.jpg"
import wheat from "../assets/products/wheat-grain.jpg"
import apple from "../assets/products/apple.jpg"




import onion from "../assets/products/onion.jpg";
import cucumber from "../assets/products/cucumber.jpg";
import cabbage from "../assets/products/cabbage.jpg";
import brinjal from "../assets/products/brinjal.jpg";
import bottleGourd from "../assets/products/bottle-gaurd.jpg";
import bitterGourd from "../assets/products/bittergaurd.jpg";
import ladiesfinger from "../assets/products/ladiesfinager.jpg";
import greenbeans from "../assets/products/greenbeans.jpg";
import drumstick from "../assets/products/drumstick.jpg";
import coriander from "../assets/products/coriander.jpg";
import mint from "../assets/products/mint.jpg";
import moringa from "../assets/products/moringa.jpg";

import orange from "../assets/products/orange.jpg";
import grapes from "../assets/products/grapes.jpg";
import guava from "../assets/products/guava.jpg";
import lemon from "../assets/products/lemon.jpg";
import papaya from "../assets/products/papaya.jpg";
import pineapple from "../assets/products/pineapple.jpg";
import pomegranate from "../assets/products/promogranate.jpg";
import coconut from "../assets/products/coconut.jpg";

import butter from "../assets/products/butter.jpg";
import buttermilk from "../assets/products/buttermilk.jpg";
import ghee from "../assets/products/ghee.jpg";
import paneer from "../assets/products/panner.jpg";
import oats from "../assets/products/oats.jpg";
import moongdal from "../assets/products/moong-dal.jpg";
import peanuts from "../assets/products/peanuts.jpg";
import peas from "../assets/products/pegionpeas.jpg";
import corn from "../assets/products/corn.jpg";



export const products = [

  {
    id: 1,
    name: "Organic Tomatoes",
    category: "Vegetables",
    price: 80,
    stock:30,
    rating: 4.8,
    image: tomato,
    description:
      "Fresh organic tomatoes harvested directly from local farms.",
    farmer: "Lakshmi Farms",
    location: "Tamil Nadu",
    freshness: "Harvested 6 hours ago",
    nutrition: [
      "Vitamin C",
      "Antioxidants",
      "Boosts immunity",
    ],
  },

  {
    id: 2,
    name: "Fresh Carrots",
    category: "Vegetables",
    price: 60,
    stock:8,
    rating: 4.7,
    image: carrot,
    description:
      "Naturally grown carrots packed with nutrients.",
    farmer: "Green Valley Farms",
    location: "Andhra Pradesh",
    freshness: "Harvested 10 hours ago",
    nutrition: [
      "Vitamin A",
      "Good eyesight",
      "Fiber rich",
    ],
  },

  {
    id: 3,
    name: "Green Spinach",
    category: "Leafy Fresh",
    price: 40,
    stock:20,
    rating: 4.9,
    image: spinach,
    description:
      "Farm-fresh spinach leaves rich in iron.",
    farmer: "Nature Roots",
    location: "Kerala",
    freshness: "Harvested today",
    nutrition: [
      "Iron rich",
      "Improves immunity",
      "Bone health",
    ],
  },

  {
    id: 4,
    name: "Alphonso Mango",
    category: "Fruits",
    price: 220,
    stock:50,
    rating: 4.9,
    image: mango,
    description:
      "Premium Alphonso mangoes with authentic sweetness.",
    farmer: "Sunrise Orchards",
    location: "Maharashtra",
    freshness: "Harvested yesterday",
    nutrition: [
      "Vitamin rich",
      "Natural sugars",
      "Antioxidants",
    ],
  },

  {
    id: 5,
    name: "Farm Fresh Potatoes",
    category: "Vegetables",
    price: 45,
    stock:30,
    rating: 4.6,
    image: potato,
    description:
      "Fresh potatoes directly from local farms.",
    farmer: "Village Farms",
    location: "Punjab",
    freshness: "Harvested today",
    nutrition: [
      "Energy rich",
      "Potassium",
      "Fiber",
    ],
  },

  {
    id: 6,
    name: "Organic Bananas",
    category: "Fruits",
    price: 70,
    stock:60,
    rating: 4.8,
    image: banana,
    description:
      "Sweet bananas naturally ripened without chemicals.",
    farmer: "Organic Roots",
    location: "Kerala",
    freshness: "Harvested 5 hours ago",
    nutrition: [
      "Potassium",
      "Natural energy",
      "Vitamin B6",
    ],
  },

  {
    id: 7,
    name: "Fresh Milk",
    category: "Dairy",
    price: 55,
    stock:50,
    rating: 4.7,
    image: milk,
    description:
      "Pure farm milk delivered fresh every morning.",
    farmer: "Happy Cow Farms",
    location: "Karnataka",
    freshness: "Delivered today",
    nutrition: [
      "Calcium",
      "Protein",
      "Vitamin D",
    ],
  },

  {
    id: 8,
    name: "Organic Rice",
    category: "Grains",
    price: 120,
    stock:60,
    rating: 4.8,
    image: rice,
    description:
      "Healthy organic rice cultivated sustainably.",
    farmer: "Green Earth Farms",
    location: "West Bengal",
    freshness: "Packed yesterday",
    nutrition: [
      "Fiber",
      "Low fat",
      "Energy rich",
    ],
  },

  {
    id: 9,
    name: "Fresh Apples",
    category: "Fruits",
    price: 180,
    stock:7,
    rating: 4.9,
    image: apple,
    description:
      "Crisp and juicy apples sourced from hill farms.",
    farmer: "Hill Valley",
    location: "Himachal Pradesh",
    freshness: "Harvested today",
    nutrition: [
      "Fiber",
      "Vitamin C",
      "Heart healthy",
    ],
  },

  {
    id: 10,
    name: "Organic Wheat",
    category: "Grains",
    price: 95,
    stock:33,
    rating: 4.7,
    image: wheat,
    description:
      "Naturally cultivated wheat with rich nutrients.",
    farmer: "Golden Farms",
    location: "Punjab",
    freshness: "Packed recently",
    nutrition: [
      "Protein",
      "Fiber",
      "Minerals",
    ],
  },


  {
id:11,
name:"Fresh Onion",
category:"Vegetables",
price:50,
stock:55,
rating:4.7,
image:onion,
description:"Fresh onions from farms.",
farmer:"Village Farms",
location:"Maharashtra",
freshness:"Harvested today",
nutrition:["Fiber","Vitamin C","Antioxidants"]
},

{
id:12,
name:"Organic Cucumber",
category:"Vegetables",
price:40,
stock:33,
rating:4.8,
image:cucumber,
description:"Crunchy organic cucumbers.",
farmer:"Green Farms",
location:"Telangana",
freshness:"Harvested today",
nutrition:["Water rich","Fiber","Vitamin K"]
},

{
id:13,
name:"Fresh Cabbage",
category:"Vegetables",
price:35,
stock:8,
rating:4.6,
image:cabbage,
description:"Healthy farm cabbage.",
farmer:"Nature Farms",
location:"Punjab",
freshness:"Harvested today",
nutrition:["Vitamin C","Fiber","Low calories"]
},

{
id:14,
name:"Brinjal",
category:"Vegetables",
price:55,
stock:8,
rating:4.5,
image:brinjal,
description:"Fresh purple brinjals.",
farmer:"Organic Roots",
location:"AP",
freshness:"Today",
nutrition:["Fiber","Potassium","Antioxidants"]
},

{
id:15,
name:"Bottle Gourd",
category:"Vegetables",
price:30,
rating:4.6,
image:bottleGourd,
description:"Healthy bottle gourds.",
farmer:"Green Valley",
location:"TN",
freshness:"Today",
nutrition:["Low calories","Fiber","Water"]
},

{
id:16,
name:"Bitter Gourd",
category:"Vegetables",
price:45,
stock:44,
rating:4.5,
image:bitterGourd,
description:"Organic bitter gourd.",
farmer:"Village Farms",
location:"AP",
freshness:"Today",
nutrition:["Iron","Vitamin C","Blood sugar control"]
},

{
id:17,
name:"Ladies Finger",
category:"Vegetables",
price:60,
rating:4.8,
image:ladiesfinger,
description:"Tender ladies finger.",
farmer:"Fresh Farms",
location:"Telangana",
freshness:"Today",
nutrition:["Fiber","Vitamin K","Digestion"]
},

{
id:18,
name:"Green Beans",
category:"Vegetables",
price:65,
rating:4.7,
image:greenbeans,
description:"Healthy green beans.",
farmer:"Organic Farms",
location:"Kerala",
freshness:"Today",
nutrition:["Fiber","Iron","Vitamin A"]
},

{
id:19,
name:"Drumsticks",
category:"Vegetables",
price:55,
stock:55,
rating:4.7,
image:drumstick,
description:"Farm fresh drumsticks.",
farmer:"Village Farms",
location:"AP",
freshness:"Today",
nutrition:["Calcium","Iron","Protein"]
},

{
id:20,
name:"Sweet Orange",
category:"Fruits",
price:120,
stock:6,
rating:4.8,
image:orange,
description:"Juicy oranges.",
farmer:"Fruit Valley",
location:"Nagpur",
freshness:"Yesterday",
nutrition:["Vitamin C","Fiber","Immunity"]
},

{
id:21,
name:"Fresh Grapes",
category:"Fruits",
price:140,
stock:66,
rating:4.9,
image:grapes,
description:"Sweet grapes.",
farmer:"Fruit Farms",
location:"Maharashtra",
freshness:"Today",
nutrition:["Antioxidants","Vitamin C","Energy"]
},

{
id:22,
name:"Guava",
category:"Fruits",
price:80,
stock:33,
rating:4.8,
image:guava,
description:"Fresh guavas.",
farmer:"Nature Farms",
location:"AP",
freshness:"Today",
nutrition:["Vitamin C","Fiber","Immunity"]
},

{
id:23,
name:"Lemon",
category:"Fruits",
price:60,
stock:55,
rating:4.7,
image:lemon,
description:"Natural lemons.",
farmer:"Organic Roots",
location:"TN",
freshness:"Today",
nutrition:["Vitamin C","Digestion","Immunity"]
},

{
id:24,
name:"Papaya",
category:"Fruits",
price:90,
stock:6,
rating:4.8,
image:papaya,
description:"Sweet papaya fruits.",
farmer:"Sunrise Farms",
location:"Kerala",
freshness:"Today",
nutrition:["Fiber","Vitamin A","Digestion"]
},

{
id:25,
name:"Pineapple",
category:"Fruits",
price:140,
stock:9,
rating:4.9,
image:pineapple,
description:"Juicy pineapples.",
farmer:"Hill Farms",
location:"Kerala",
freshness:"Yesterday",
nutrition:["Vitamin C","Antioxidants","Immunity"]
},

{
id:26,
name:"Pomegranate",
category:"Fruits",
price:180,
stock:66,
rating:4.9,
image:pomegranate,
description:"Healthy pomegranates.",
farmer:"Nature Farms",
location:"Maharashtra",
freshness:"Today",
nutrition:["Iron","Antioxidants","Blood health"]
},

{
id:27,
name:"Fresh Coconut",
category:"Fruits",
price:70,
stock:66,
rating:4.8,
image:coconut,
description:"Natural coconuts.",
farmer:"Kerala Farms",
location:"Kerala",
freshness:"Today",
nutrition:["Healthy fats","Electrolytes","Energy"]
},

{
id:28,
name:"Fresh Coriander",
category:"Leafy Fresh",
price:20,
stock:77,
rating:4.8,
image:coriander,
description:"Fresh coriander leaves.",
farmer:"Organic Farms",
location:"AP",
freshness:"Today",
nutrition:["Iron","Vitamin K","Fiber"]
},

{
id:29,
name:"Mint Leaves",
category:"Leafy Fresh",
price:25,
rating:4.9,
image:mint,
description:"Natural mint leaves.",
farmer:"Green Farms",
location:"TN",
freshness:"Today",
nutrition:["Digestion","Antioxidants","Freshness"]
},

{
id:30,
name:"Moringa Leaves",
category:"Leafy Fresh",
price:35,
stock:77,
rating:4.8,
image:moringa,
description:"Healthy moringa leaves.",
farmer:"Village Farms",
location:"AP",
freshness:"Today",
nutrition:["Iron","Protein","Calcium"]
},

{
id:31,
name:"Butter",
category:"Dairy",
price:70,
stock:55,
rating:4.8,
image:butter,
description:"Pure butter.",
farmer:"Happy Cow Farms",
location:"Karnataka",
freshness:"Packed today",
nutrition:["Fat","Calcium","Energy"]
},

{
id:32,
name:"Buttermilk",
category:"Dairy",
stock:66,
price:30,
rating:4.7,
image:buttermilk,
description:"Fresh buttermilk.",
farmer:"Happy Cow Farms",
location:"Karnataka",
freshness:"Today",
nutrition:["Calcium","Protein","Digestion"]
},

{
id:33,
name:"Ghee",
category:"Dairy",
price:350,
stock:5,
rating:4.9,
image:ghee,
description:"Pure cow ghee.",
farmer:"Organic Dairy",
location:"Punjab",
freshness:"Packed recently",
nutrition:["Healthy fats","Energy","Vitamin A"]
},

{
id:34,
name:"Paneer",
category:"Dairy",
price:120,
stock:44,
rating:4.8,
image:paneer,
description:"Fresh paneer cubes.",
farmer:"Happy Cow Farms",
location:"Karnataka",
freshness:"Today",
nutrition:["Protein","Calcium","Muscle growth"]
},

{
id:35,
name:"Oats",
category:"Grains",
price:110,
stock:8,
rating:4.8,
image:oats,
description:"Healthy oats.",
farmer:"Golden Farms",
location:"Punjab",
freshness:"Packed",
nutrition:["Fiber","Protein","Energy"]
},

{
id:36,
name:"Moong Dal",
category:"Grains",
price:130,
stoke:20,
rating:4.8,
image:moongdal,
description:"Organic moong dal.",
farmer:"Village Farms",
location:"MP",
freshness:"Packed",
nutrition:["Protein","Iron","Fiber"]
},

{
id:37,
name:"Peanuts",
category:"Grains",
stock:66,
price:100,
rating:4.7,
image:peanuts,
description:"Healthy peanuts.",
farmer:"Nature Farms",
location:"Gujarat",
freshness:"Packed",
nutrition:["Protein","Healthy fats","Energy"]
},

{
id:38,
name:"Green Peas",
category:"Grains",
stock:7,
price:90,
rating:4.7,
image:peas,
description:"Fresh green peas.",
farmer:"Organic Farms",
location:"Punjab",
freshness:"Today",
nutrition:["Protein","Fiber","Iron"]
},

{
id:39,
name:"Sweet Corn",
category:"Grains",
price:60,
stock:6,
rating:4.8,
image:corn,
description:"Farm fresh corn.",
farmer:"Village Farms",
location:"Karnataka",
freshness:"Today",
nutrition:["Fiber","Energy","Vitamin B"]
},

];
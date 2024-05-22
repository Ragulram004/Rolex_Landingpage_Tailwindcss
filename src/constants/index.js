import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../asset/icons";
import { gold2,silvergold2,blackgold1,silvergold1,silver1,silver2,gold1,customer1,customer2 } from "../asset/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const watches = [
    {
        thumbnail: blackgold1,
        watch: blackgold1,
    },
    {
        thumbnail: gold2,
        watch: gold2 ,
    },
    {
        thumbnail: silvergold1,
        watch: silvergold1,
    },
    
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL:silver1 ,
        name: "Rolex Datejust",
        price: "$200.20",
    },
    {
        imgURL: gold1,
        name: "Rolex Oyster Perpetual",
        price: "$2100.20",
    },
    {
        imgURL: silvergold2,
        name: "Rolex Air Cellini",
        price: "$2200.20",
    },
    {
        imgURL: silver2,
        name: "Rolex Submariner",
        price: "$2300.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Moren Mills',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lessika Lilly',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll most certainly be back to buy!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Datejust", link: "/" },
            { name: "GMT-Master II", link: "/" },
            { name: "Day-Date", link: "/" },
            { name: "Cosmograph Daytona", link: "/" },
            { name: "Submariner", link: "/" },
            { name: "Yacht-Master", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

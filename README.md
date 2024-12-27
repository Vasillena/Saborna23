<div align="center">
<h1 align="center">Saborna 23</h1>
  🍷🥘🍷
  <br/>
The pure taste of Plovdiv
   <br/>

## ⭐️  Introduction

Nestled at the foot of the Old Town and the beginning of Kapana, 'Saborna 23' is a gathering spot for enthusiasts of gourmet cuisine, fine wine, and perfect service in the heart of Plovdiv.⁣ ⁣
   <br/>
This project is built with Next.js, Tailwind and Framer Motion.
   <br/>

View project at: https://www.saborna23.bg


## 📜 Table of Contents
[Getting started](#getting-started) •
[Features](#features) •
[Structure and Architecture](#structure-and-architecture) •
[Screenshots](#screenshots)

## 💡 Getting Started
Clone the repository:
```
git clone https://github.com/Vasillena/Saborna23
```
Run the following command to install all required packages and dependencies:
```
npm install
```
Run the following command to start the app in development mode:
```
npm run dev
```
Open http://localhost:3000 in your browser to view the application.

## 🧸 Features

**Key Features**

Saborna 23 is a real place in Plovdiv and this is it's official website. All visitors can explore the restaurant, the menu and the contact information

## 🏛️ Structure and Architecture
</div>

- [.env](./.env)
- [.eslintrc.json](./.eslintrc.json)
- [.gitattributes](./.gitattributes)
- [.gitignore](./.gitignore)
- [App Directory](#app-directory)
  - [Components](#components)
    - [About.tsx](./app/components/About.tsx)
    - [Animations](#animations)
      - [Reveal.tsx](./app/components/Animations/Reveal.tsx)
    - [Contact.tsx](./app/components/Contact.tsx)
    - [Gallery.tsx](./app/components/Gallery.tsx)
    - [Hero.tsx](./app/components/Hero.tsx)
    - [MainNav.tsx](./app/components/MainNav.tsx)
    - [MenuCard.tsx](./app/components/MenuCard.tsx)
    - [MenuHome.tsx](./app/components/MenuHome.tsx)
    - [MenuList.tsx](./app/components/MenuList.tsx)
    - [Navbar.tsx](./app/components/Navbar.tsx)
    - [SwitchLanguage.tsx](./app/components/SwitchLanguage.tsx)
  - [Favicon](./app/favicon.ico)
  - [Menu List](#menu-list)
    - [menuList.json](./app/menuList/menuList.json)
    - [menuListBG.json](./app/menuList/menuListBG.json)
  - [OpenGraph Image](./app/opengraph-image.png)
  - [Sitemap](./app/sitemap.xml)
  - [Utilities](#utilities)
    - [fonts.ts](./app/utils/fonts.ts)
  - [Locale](#locale)
    - [about](#about)
      - [page.tsx](./app/[locale]/about/page.tsx)
    - [contact](#contact)
      - [page.tsx](./app/[locale]/contact/page.tsx)
    - [Error Page](./app/[locale]/error.tsx)
    - [gallery](#gallery)
      - [page.tsx](./app/[locale]/gallery/page.tsx)
    - [globals.css](./app/[locale]/globals.css)
    - [layout.tsx](./app/[locale]/layout.tsx)
    - [loading.tsx](./app/[locale]/loading.tsx)
    - [Menu](#menu)
      - [drinks](#drinks)
        - [page.tsx](./app/[locale]/menu/drinks/page.tsx)
      - [food](#food)
        - [page.tsx](./app/[locale]/menu/food/page.tsx)
      - [page.tsx](./app/[locale]/menu/page.tsx)
      - [wine](#wine)
        - [page.tsx](./app/[locale]/menu/wine/page.tsx)
    - [Not Found](./app/[locale]/not-found.tsx)
    - [Root Page](./app/[locale]/page.tsx)
    - [Provider](./app/[locale]/provider.tsx)
    - [Rest Pages](#rest-pages)
      - [page.ts](./app/[locale]/[rest]/page.ts)
- [LICENSE](./LICENSE)
- [Locales](#locales)
  - [bg.ts](./locales/bg.ts)
  - [client.ts](./locales/client.ts)
  - [en.ts](./locales/en.ts)
  - [server.ts](./locales/server.ts)
- [Middleware](./middleware.ts)
- [Next Environment Definitions](./next-env.d.ts)
- [Next Config](./next.config.ts)
- [Package Lock](./package-lock.json)
- [Package](./package.json)
- [PostCSS Config](./postcss.config.mjs)
- [Public Assets](#public-assets)
  - [404.webp](./public/404.webp)
  - [About Images](#about-images)
    - [about.webp](./public/about.webp)
    - [about-2.webp](./public/about-2.webp)
    - [about-3.webp](./public/about-3.webp)
    - [about-4.webp](./public/about-4.webp)
    - [about-5.webp](./public/about-5.webp)
    - [about-6.webp](./public/about-6.webp)
    - [about-7.webp](./public/about-7.webp)
    - [about-8.webp](./public/about-8.webp)
  - [Back.svg](./public/back.svg)
  - [Fonts](#fonts)
    - [BitterRose.otf](./public/BitterRose.otf)
    - [Chillax-Medium.otf](./public/Chillax-Medium.otf)
    - [MazzardL-Regular.otf](./public/MazzardL-Regular.otf)
  - [Icons and SVGs](#icons-and-svgs)
    - [clock.svg](./public/clock.svg)
    - [close.svg](./public/close.svg)
    - [language.svg](./public/language.svg)
    - [menu.svg](./public/menu.svg)
    - [phone.svg](./public/phone.svg)
    - [socials-1.svg](./public/socials-1.svg)
    - [socials-2.svg](./public/socials-2.svg)
  - [Gallery Images](#gallery-images)
    - [gallery-1.webp](./public/gallery-1.webp)
    - [gallery-2.webp](./public/gallery-2.webp)
    - [gallery-3.webp](./public/gallery-3.webp)
    - [gallery-4.webp](./public/gallery-4.webp)
    - [gallery-5.webp](./public/gallery-5.webp)
    - [gallery-6.webp](./public/gallery-6.webp)
    - [gallery-7.webp](./public/gallery-7.webp)
  - [Hero Image](./public/hero.webp)
  - [Loading Animation](./public/loading.json)
  - [Logo Images](#logo-images)
    - [logo.webp](./public/logo.webp)
    - [logo-2.webp](./public/logo-2.webp)
  - [Menu Images](#menu-images)
    - [menu-1.webp](./public/menu-1.webp)
    - [menu-2.webp](./public/menu-2.webp)
    - [menu-3.webp](./public/menu-3.webp)
    - [menu-4.webp](./public/menu-4.webp)
  - [Location Icon](./public/location.svg)
- [README.md](./README.md)
- [Tailwind Config](./tailwind.config.ts)
- [TypeScript Config](./tsconfig.json)





<div align="center">
  
## 📷 Screenshots


![Screenshot 1](https://github.com/user-attachments/assets/581d7087-90f2-47d2-8ff5-f74235a7a7f1)
![Screenshot 2](https://github.com/user-attachments/assets/4db12370-2f7e-443b-9a6d-7d00b26f89ff)
![Screenshot 3](https://github.com/user-attachments/assets/7537efe6-1341-4a4a-a6da-7e60dc1b1c8f)
![Screenshot 4](https://github.com/user-attachments/assets/50279565-65a2-4662-be5f-3a48c81555e3)
![Screenshot 5](https://github.com/user-attachments/assets/3ee66e67-22a3-4faa-97e5-5087f61a7cff)
![Screenshot 6](https://github.com/user-attachments/assets/4d5b38a6-4fd9-425a-9449-bf98d4e1283b)


</div>

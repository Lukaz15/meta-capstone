import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --main: #e3e3e3;
  --secondary: #365746;
  --background: #252f2953;
  --background-secondary: #356c4f;
}


* {
  box-sizing: border-box;
  margin: 0;
}

body {
  color: var(--main);
  background-color: rgb(0, 0, 0);
  overflow: hidden;
  font-family: Kanit, Kalam, "Shadows Into Light", Pacifico;
}



#dish-wrapper {
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.9rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 5vh;
}

#dish-wrapper h1 {
  font-size: 4em;
  margin-bottom: 2vh;
}

#dish-wrapper article {
  display: grid;
  width: 60%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

#dish-wrapper article img {
  width: 60%;
  align-self: center;
  justify-self: center;
}

.info-wrapper {
  display: flex;
  flex-flow: column wrap;
  text-align: left;
}

#dish-wrapper article .info-wrapper p span {
  font-size: 2em;
}

#dish-wrapper article small {
  height: 0.75em;
}

#dish-wrapper article small:nth-of-type(1) {
  margin-top: 2em;
}

#dish-wrapper article .info-wrapper small > span {
  position: relative;
  left: 62.5%;
  font-size: 1.75em;
  font-weight: bolder;
}

#dish-wrapper article:nth-of-type(2) {
  margin-top: 2em;
  margin-bottom: 2em;
}

.info-wrapper:nth-of-type(1) p {
  grid-area: 1 / 2 / 2 / 3;
  justify-self: flex-start;
}

.info-wrapper:nth-of-type(2) p {
  grid-area: 1 / 1 / 2 / 2;
  justify-self: flex-end;
}

#dish-wrapper article:nth-of-type(1) img {
  grid-area: 1 / 1 / 2 / 2;
  justify-self: flex-start;
}

#dish-wrapper article:nth-of-type(2) img {
  grid-area: 1 / 2 / 2 / 3;
  justify-self: flex-end;
}

#Book-container {
  display: flex;
  flex-flow: column nowrap;
}

#Book-container article {
  align-self: center;
}

#Book article h2 {
  font-size: 4em;
  font-weight: bolder;
  margin-bottom: 1.5vh;
  margin-left: 1em;
}

#Book article form {
  display: flex;
  flex-flow: column wrap;
  font-size: 1.2em;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.form-element {
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 1.5vh;
}

.form-element label {
  grid-area: 1 / 1 / 2 / 2;
  text-align: left;
  width: 100%;
}

.form-element:last-of-type label {
  font-size: 0.75em;
}

.inputs {
  border: none;
  margin-left: 2em;
  margin-right: 10px;
  grid-area: 1 / 2 / 2 / 3;
  border-radius: 5px;
  width: 100%;
  padding: none;
}

.inputs {
  outline: none;
}

.form-element textarea {
  height: auto;
}

button[type="submit"] {
  margin-top: 1vh;
  border: none;
  color: var(--main);
  font-weight: bolder;
  background-color: var(--secondary);
  width: 30%;
  padding: 3%;
  align-self: center;
  margin-left: 20%;
  cursor: pointer;
  border-radius: 10px;
}

button:hover {
  color: black;
}

#Book footer {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
}

#Book footer > img {
  grid-area: 1 / 1 / 2 / 2;
  width: 20%;
  aspect-ratio: 1/1;
  transform: translateX(-20%);
  transform: translateY(-20%);
}

#Adress-container {
  grid-area: 1 / 2 / 2 / 3;
}

#Adress-container p:last-of-type {
  font-weight: bolder;
}

#Copyright-container {
  grid-area: 1 / 3 / 2 / 4;
  margin-right: 2vw;
}

#Copyright-container * {
  transform: translateX(10vw);
}

#Copyright-container img {
  width: 90%;
  aspect-ratio: 8 / 1;
}

#Book a:first-of-type {
  z-index: 2;
}


/*Medias queries below*/

@media screen and (max-width: 1366px) {
  header nav a {
    font-size: 0.75em;
    border-bottom: 3px solid var(--main);
  }

  header img {
    aspect-ratio: 3 / 1;
  }

  #About article {
    justify-content: flex-end;
  }

  #About article p {
    font-size: 0.75em;
    margin-right: 5vw;
  }

  #About article span {
    font-size: 1.5rem;
  }

  #About article img {
    margin-right: 15vw;
    width: 32.5%;
  }

  #dish-wrapper {
    transform: scale(85%);
  }

  #dish-wrapper h1 {
    font-size: 2rem;
  }

  #dish-wrapper article .info-wrapper {
    width: 100%;
    font-size: 0.75em;
  }

  #dish-wrapper article div p span {
    font-size: 1.7em;
  }

  #dish-wrapper article div small {
    font-size: 0.85em;
  }

  #dish-wrapper article .info-wrapper > span {
    font-size: 0.85em;
  }

  #Book-container {
    transform: scale(75%);
  }
}

@media screen and (max-width: 768px) {
  header nav a {
    font-size: 0.5em;
    border-bottom: 1.5px solid var(--main);
  }

  header img {
    width: 80%;
  }

  #Home p {
    font-size: 1rem;
  }

  #Home span {
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }

  #About article {
    justify-content: center;
  }

  #About article p {
    overflow: visible;
    width: 70%;
    margin: auto;
    font-size: 0.8rem !important;
  }

  #About article span {
    font-size: 0.75rem;
  }

  #About article img {
    display: none;
    visibility: hidden;
  }

  #dish-wrapper {
    transform: scale(90%);
  }

  #dish-wrapper article {
    display: flex;
    flex-flow: row wrap;
    transform: scale(80%);
  }

  #dish-wrapper h1 {
    font-size: 2em;
    margin: 0;
    transform: translateY(20vh);
  }

  .info-wrapper {
    font-size: 0.8em;
    width: 200% !important;
  }

  #dish-wrapper article:nth-of-type(1) {
    margin-bottom: 2em;
    transform: translateY(15vh) scale(80%);
  }

  #dish-wrapper article .info-wrapper {
    order: 2;
  }

  #dish-wrapper article img {
    width: 45vw;
    order: 1;
    margin-top: 2em;
  }

  #dish-wrapper article:nth-of-type(2) {
    margin-bottom: 10vh;
  }

  #Book article {
    transform: scale(0.75);
  }

  #Book-container article h2 {
    font-size: 3em;
  }

  #Address-container > p {
    font-size: 0.65rem;
  }

  #Copyright-container {
    font-size: 0.5rem;
  }

  #Copyright-container img {
    width: 100% !important;
  }

  footer img {
    width: 50% !important;
  }
}

@media screen and (min-width: 1880px) {
  #Home p {
    font-size: 3em;
  }

  #Home p span {
    font-size: 2em;
  }

  #About article img {
    width: 30%;
  }

  #About article p {
    font-size: 2.25rem;
  }

  .info-wrapper {
    font-size: 0.6rem;
  }

  .info-wrapper {
    font-size: 1.5em;
  }

  #Book-container {
    transform: scale(1.25);
  }

  footer img {
    transform: translateX(2.5vw) !important;
  }

  #Copyright-container > * {
    transform: translateX(2vw);
  }
}

@media screen and (max-width: 540px) and (max-height: 720px) and (orientation: portrait) {
  #dish-wrapper {
    transform: scale(75%);
  }
}


`;

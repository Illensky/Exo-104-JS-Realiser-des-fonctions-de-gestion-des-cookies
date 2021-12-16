// Le cookie expirera dans 24h, exprimées en millisecondes !
// 1 jour = 86400000 millisecondes.

// Comment créer un cookie, je suis gentil je laisse l'exemple !
document.cookie = "theme=dark; path=/; domain=localhost; max-age=86400000; samesite=strict";
console.log(document.cookie);


/**
 * Récupère tous les cookies.
 * @returns {string[]}
 */
function getCookies() {
    let cookies = document.cookie.split(';');
    return cookies.map(cookie => cookie.trim());
}


/**
 * TODO Cette fonction doit permettre de créer un nouveau cookie avec le nom et la valeur au choix !
 * @param cookieName
 * @param cookieValue
 */
function setCookie(cookieName, cookieValue) {
    // Le cookie doit être valide 2 jours et doit respecter les normes de sécurité contre les failles CSRF.
    // Votre code ici.
    document.cookie = cookieName + "=" + cookieValue +"; path=/; domain=localhost; max-age=86400000; samesite=strict";
    console.log(document.cookie);
}


/**
 * TODO Cette fonction doit retourner la valeur du nom du cookie passé en paramètre.
 * @param cookieName
 */
function getCookie(cookieName) {
    // Votre code ici.

    //let allCookies = document.cookie.split(';');
    //let wantedCookie;
    //allCookies.forEach(value => {
    //   if (value.includes(cookieName))
    //       wantedCookie = value;
    //});
    //wantedCookie = wantedCookie.split('=');
    //const cookieValue = wantedCookie[1];
    //return cookieValue

       const name = cookieName + "=";
       const allCookieArray = document.cookie.split('; ');
       let wantedCookieValue;
       allCookieArray.forEach(currenCookie => {
        if (currenCookie.indexOf(name) === 0) wantedCookieValue = currenCookie.substring(name.length);
       })
       return wantedCookieValue

}


console.log(getCookies());

// FIXME Test de setCookie()
setCookie('monCookieTest', 'maValeurTest');
console.log(getCookies());

// FIXME test de getCookie(param)
console.log(getCookie('monCookieTest'));
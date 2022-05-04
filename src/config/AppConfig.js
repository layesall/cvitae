
import Config from './config.json'

/**
 * Get app/pages data from config
 * @param {string} term 
 * @returns app, pages
 */
export const AppConfig = (term) => {

  if(term === 'app') {
    return Config.applications;
  }else if(term === 'contact'){
    return Config.pages.contact;
  }else  if (term === "realizations") {
    return Config.curriculum.realizations;
  } else if (term === "skills") {
    return Config.curriculum.skills;
  }

}
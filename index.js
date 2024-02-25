function introduction(name) {
    if (name === "Aki") {
       
        return "Hi, my name is Aki."; }

        if (name === "Samip") {
            return "Hi, my name is Samip.";
        }

}

function introductionWithLanguage (name, language) {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`) 
        
    // if(name === "Aki")
    //     if(language === "Ember.js") {
    //         return "Hi, my name is Aki and I am learning to program in Ember.js."; }
           
    //         if(name === "Samip")
    //         if(language === "React") {
    //             return "Hi, my name is Samip and I am learning to program in React."; }
            }


          
            function introductionWithLanguageOptional (name, language = "JavaScript") {
                return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
               
                // if(name === "Gracie")
                // if(language === "Python") {
                //     return "Hi, my name is Gracie and I am learning to program in Python.";
                // }
                // if(name === "Gracie") {
                //     return "Hi, my name is Gracie and I am learning to program in JavaScript.";
                // }
            }

         
         
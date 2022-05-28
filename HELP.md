# Todo app

# pipes 

 'Pipes' sont des fonctions simples utiliser dans les templates pour transformer des donnees .
      
    ng g c pipes
    ng g pipe pipes/pluralize
    ng g pipe pipes/relative-time

[https://angular.io/guide/pipes](https://angular.io/guide/pipes)

# validators

    ng g c  validators 
    ng g service validators/validation 

# Angulars Forms 

    - Formulaires pilote par le templates (template-driven forms)
      - directives (two way data binding) : ngModel
      - pros/cons 
          -Pas evolutifs
          -Pas reutilisables 
          -Pas faciles a tester 
          -Syntaxes simple avec le two way binding
     - Formulaires reactifs pilote par code (templates-driven forms)
      - directives :  formControlName
      - pros/cons 
          -Plus evolutifs
          -Plus reutilisables 
          -Plus faciles a tester 
          -Syntaxes plus Complexe  

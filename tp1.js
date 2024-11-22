function permission(age,adhesion,typeReservation,nbPersonne){
    switch (age) {
        case age < 18:
            return "Vous êtes mineur, vous ne pouvez pas réserver";
        case age >= 18:
            let prix = 0;
            switch (typeReservation) {
                case "standard":
                    prix = 20;
                    return "Le prix de votre réservation est de " + prix + "€";
                case "premium":
                    prix = 35;
                    return "Le prix de votre réservation est de " + prix + "€";
                case "vip":
                    prix = 50;
                    return "Le prix de votre réservation est de " + prix + "€";
            }
            let reduction = 0;
            let total = 0;
            switch (adhesion) {
                case "membre":
                    reduction = 10;
                    total = prix * nbPersonne * (1 - reduction / 100); // 10% de réduction
                    return "Vous êtes membre, vous avez droit à une réduction de 10%";
                case "non-membre":
                    reduction = 0;
                    total = prix * nbPersonne;
                    return "Vous n'êtes pas membre, vous n'avez pas droit à une réduction";
            }
            return "Le prix total de votre réservation est de " + total + "€, pour " + nbPersonne + " personne(s)";
    }
}
console.log(permission(18,"membre","vip",2)); // Vous êtes membre, vous avez droit à une réduction de 10%
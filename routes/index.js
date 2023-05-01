var express             = require("express"),
    router              = express.Router(),
    nodemailer          = require("nodemailer");

    


//LANDING PAGE
    router.get("/", function(req, res){
        res.render("landing");
    });

// ABOUT SECTION
    router.get("/biography", function(req, res){
        res.render("biography"); 
    });

// PORTFOLIO SECTION
    router.get("/portfolio", function(req, res){
        res.render("portfolio"); 
    }); 
    // Hospitality
    router.get("/hospitality", function (req, res){
        res.render("hospitality"); 
        });
        // Weddings
        router.get("/wedding", function(req, res){
            res.render("wedding"); 
        });

        // Maternity
        router.get("/maternity", function(req, res){
            res.render("maternity"); 
        });

        // Sport
        router.get("/sports", function(req, res){
            res.render("sports"); 
        });

        // EVents 
        router.get("/events", function(req, res){
            res.render("events"); 
        })
        // Brands
        router.get("/brands", function(req, res){
            res.render("brands"); 
        });







        

// CONTACT SECTION
    router.get("/getintouch", function(req, res){
        res.render("getintouch"); 
    });


//=====================ROAD JOURNAL ======================//

//INDEX
    router.get("/roadjournal", function(req, res) {
        res.render("roadjournal");
    });

//SHOW
    router.get("/qatar_part_I", function(req, res){
        res.render("qatar_part_I");
    });
    
    //SHOW
    router.get("/qatar_part_II", function(req, res){
        res.render("qatar_part_II");
    });


//=============================================================//
// // NODEMAILER PATH

router.post("/getintouch/send", function(req, res) {
    var smtpTransport = nodemailer.createTransport({
      service: 'Yahoo',
      auth: {
          user: 'livtobe@yahoo.com',
          pass: 'LatviesuZeltene2018',
  }
});

    var mailOptions = {
        from: 'Liva Linde <livtobe@yahoo.com>',
        to: 'livtobe@yahoo.com',
        replyTo: req.body.email,
        subject: 'Website Form',
        text: 'You have a contact with the following details... Name: '+ req.body.name + ' Email: ' + req.body.email + ' Message: ' + req.body.message,
        html: '<h3>You have a new contact information with the following details...</h3><ul><li>Name: ' + req.body.name + ' </li><li>Email: ' + req.body.email + ' </li></ul><p>Message: <br/><br/>     ' + req.body.message + ' </p>'
    };

    //  smtpTransport.sendMail(mailOptions, function(err, info){
    //         if(err) {
    //         req.flash("error", "Something went wrong");
    //         console.log(err);
    //         res.redirect("/collaboration");
    //         } else {
    //             req.flash("success", "Your e-mail has been sent!");
    //             console.log('Message sent: %s', info.messageId);   
    //             console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    //             res.render('collaboration');
    //         }
    // });
    
}); 



module.exports = router;
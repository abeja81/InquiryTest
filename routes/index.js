const express = require('express');

const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');

const router = express.Router();

const Inquiry = mongoose.model('Inguiry');

const path = require('path');

const validator = require('email-validator');

var Recaptcha = require('express-recaptcha').RecaptchaV3;

router.get('/', (req, res) => {
    res.render('form', { title: 'Inquiry form' });
  });

router.post('/',
    [
        check('name')
        .isLength({ min: 1 })
        .withMessage('Please enter a name'),
        check('email')
        .isEmail()
        .withMessage('Please enter valid email'),
        check('message')
        .isLength({ min: 10 })
        .withMessage('Please write your inquiry'),
        check('g-recaptcha-response')
        .not().isEmpty()
        .withMessage('Please check your captcha!')
    ],
    (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
          const inquiry = new Inquiry(req.body);
          inquiry.save()
            .then(() => {res.render('thankyou')})
            .catch((err) => {
                console.log(err);
                res.send('Sorry something went horribly wrong here!');
            });
        } else {
          res.render('form', {
            title: 'Inguiry form',
            errors: errors.array(),
            data: req.body,
          });
        }
      }
    );

    router.get('/newinq', (req, res) => {
        Inquiry.find()
          .then((newinq) => {
            res.render('index', { title: 'Listing Inquiries', newinq });
          })
          .catch(() => { res.send('Sorry! Something went wrong.'); });
      });

module.exports = router;


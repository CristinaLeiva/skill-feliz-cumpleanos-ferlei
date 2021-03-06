//positive sound for birthday greeting from Alexa Sound Library
//https://developer.amazon.com/docs/custom-skills/ask-soundLibrary.html
const POSITIVE_SOUND = `<audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_tally_positive_01"/>`; //deberíamos poder poner una dirección http donde hubiera un sonido

//congratulations greeting (speechcon)
//http://developer.amazon.com/docs/custom-skills/speechcon-reference-interjections-spanish.html
const GREETING_SPEECHCON = `<say-as interpret-as="interjection">felicidades</say-as>`;

module.exports = {
    es: {
        translation: {
            WELCOME_MSG: 'Hola {{name}} Dime. Cuando es tu fecha de cumpleaños? ',
            REGISTER_MSG: '{{name}} Tu fecha de cumpleaños es el {{day}} de {{month}} de {{year}}. ',
            DAYS_LEFT_MSG: '{{name}} Queda {{count}} día ',
            DAYS_LEFT_MSG_plural: '{{name}} Quedan {{count}} días ',
            WILL_TURN_MSG: 'para que cumplas {{count}} año. ',
            WILL_TURN_MSG_plural: 'para que cumplas {{count}} años. ',
            GREET_MSG: POSITIVE_SOUND + GREETING_SPEECHCON + ' {{name}} ',
            NOW_TURN_MSG: 'Hoy cumples {{count}} años! La familia Ferlei te desea todo lo mejor. ',
            MISSING_MSG: 'Parece que aun no me has dicho tu fecha de cumpleaños. Prueba decir, guarda mi cumpleaños o dime directamente una fecha. ',
            OVERWRITE_MSG: 'Si quieres cambiar la fecha puedes decir, guarda mi cumpleaños o decirme directamente una fecha. ',
            //HELP_MSG_LONG: 'Puedo recordar tu cumpleaños si me dices una fecha. O puedo decirte cuanto falta para que cumplas años. También puedo crear un recordatorio para tu cumpleaños. O bien decirte quién cumple años hoy. ',
            HELP_MSG_LONG: 'Puedo recordar tu cumpleaños si me dices una fecha. O puedo decirte cuanto falta para que cumplas años y también decirte quién cumple años hoy. ',
            HELP_MSG: 'Dime Ayuda y te diré qué más puedo hacer por ti.',
            GOODBYE_MSG: ['Hasta luego {{name}}! ', 'Adios {{name}}! ', 'Hasta pronto {{name}}! ', 'Nos vemos {{name}}! '],
            REFLECTOR_MSG: 'Acabas de activar {{intent}}',
            FALLBACK_MSG: 'Lo siento, no se nada sobre eso. Por favor inténtalo otra vez. ',
            ERROR_MSG: 'Lo siento, ha habido un problema. Por favor inténtalo otra vez. ',
            NO_TIMEZONE_MSG: 'No he podido determinar tu zona horaria. Verifica la configuración de tu dispositivo e inténtalo otra vez.',
            REMINDER_CREATED_MSG: 'El recordatorio se ha creado con éxito. ',
            REMINDER_ERROR_MSG: 'Ha habido un error al crear el recordatorio. ',
            UNSUPPORTED_DEVICE_MSG: 'Este dispositivo no soporta la operación que estás intentando realizar. ',
            CANCEL_MSG: 'Vale. Lo cancelamos. ',
            MISSING_PERMISSION_MSG: 'Parece que no has autorizado el envío de recordatorios. Te he enviado una tarjeta a la app Alexa para que lo habilites. ',
            API_ERROR_MSG: 'Lo siento, ha habido un problema de acceso a API externa. Por favor inténtalo otra vez. ',
            PROGRESSIVE_MSG: 'Espera un momento mientras busco algunos cumpleaños de hoy. ',
            CONJUNCTION_MSG: ' y ',
            CELEBRITY_BIRTHDAYS_MSG: 'En esta fecha cumplen años: ',
            ALSO_TODAY_MSG: 'También hoy cumplen: '
        }
    }
}
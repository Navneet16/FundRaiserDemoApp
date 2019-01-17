function loginTemplateModel(email ,ip , screenSize , browser , browserVersion , mobile , os , disableLink){
    return new Promise((resolve, reject) => {
      resolve(
      `<!DOCTYPE html><html><body><div style="margin:0;padding:0;background-color:#fff;height:100%!important;width:100%!important"><center><table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" style="border-collapse:collapse;margin:0;padding:0;background-color:#fff;height:100%!important;width:100%!important"><tbody><tr><td align="center" valign="top" style="margin:0;padding:20px 10px 20px 10px;border-top:0;height:100%!important;width:100%!important"><table border="0" cellpadding="0" cellspacing="0" width="100%"  style="border-collapse:collapse;max-width:600px;border:1px solid #ddd;"><tbody><tr><td align="center" valign="top" style="background-color:#ffffffab;border-top:0;border-bottom:0"><table style="max-width:100%;min-width:100%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0" align="left"><tbody><tr><td style="color:#606060;font-family:Helvetica;font-size:11px;line-height:125%;text-align:center;" valign="top" height="75">
      <p style="background-color: #FFF!important;"><img src="https://www.altradex.com/img/altradex-logo-sp.png" width="50%" height="auto"></p>
      </td></tr></tbody></table></td></tr><tr><td align="center" valign="top" style="background-color:#ffffffab;border-top:0;border-bottom:0"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse"><tbody><tr><td align="center" valign="top"><table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%;min-width:100%;border-collapse:collapse" width="100%"><tbody><tr><td valign="top" style="color:#606060;font-family:Helvetica;font-size:15px;line-height:150%;text-align:left;padding:0 18px 9px 18px"><div style="text-align:justify"><div style="text-align:center"><div style="text-align:left"><p style="text-align:center;margin:0em 0;color:#606060;font:bold 27px Arial,Helvetica,sans-serif">
      </p></div></div></div></td></tr><tr><td valign="top" style="color:#606060;font-family:Helvetica;font-size:15px;line-height:150%;text-align:left;padding:0 18px 9px 18px"><div style="text-align:justify"><div style="text-align:center"><div style="text-align:left"><p style="text-align:left;margin:1em 0;color:#606060;font: 300 16px/19px 'Open Sans',Arial,Helvetica,sans-serif;color: #333332;">
                              <b>Dear Customer,</b>
          <p><code>Greetings from Altradex!</code></p>
      </p></div></div></div></td></tr><tr><td valign="top" style="color:#606060;font-family:Helvetica;font-size:15px;line-height:150%;text-align:left;padding:0 18px 9px 18px"><div style="text-align:justify"><div style="text-align:center"><div style="text-align:left">
      <p style="text-align:left; margin:0em 0;color:#606060;font:14px/19px Arial,Helvetica,sans-serif;color:#333332">
       The system has detected that your account is logged in.<br>
          Below are the details:<br>
          <p>
          Email : ${email}<br>
          IP : ${ip}<br>
          Screen Size: ${screenSize}<br>
          Browser and Browser Version: ${browser}   ${browserVersion}<br>
          Mobile :${mobile} <br>
          Operating System: ${os}<br>
       </p>
      <!-- =====================================msg1===================================================== -->
      </p></div></div></div></td></tr></tbody></table><table style="min-width:100%;border-collapse:collapse" width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td  align="center" valign="top"><table><tbody><tr><td>
      <!-- =====================================msg2===================================================== -->
      <!-- =====================================msg2===================================================== -->
      </td></tr></tbody></table></td></tr><tr><td valign="top" style="color:#606060;font-family:Helvetica;font-size:15px;line-height:150%;text-align:left;padding:0 18px 9px 18px"><div style="text-align:justify"><div style="text-align:center"><div style="text-align:left">
      <p style="text-align:left; margin:1em 0em 0em 0em ;color:#606060;font:14px/19px Arial,Helvetica,sans-serif;color:#333332">
      <!-- =====================================msg3===================================================== -->
                                  <p>Note:</p>
          <ul>
                <li>Read all the details above very carefully.</li>
                <li> Kindly contact us If this activity is not your own operation, please <a href = ${disableLink}><p style="text-align:left; margin:0em 0;color:#606060;font:14px/19px Arial,Helvetica,sans-serif;color:#333332; font-weight:700"><strong style="font-weight: 700">
              disable your account</strong></p></a> and contact us immediately. https://www.altradex.com/support.</li>
          </ul>
      <!-- =====================================msg3===================================================== -->
      </p></div></div></div></td></tr><tr><td valign="top" style="color:#606060;font-family:Helvetica;font-size:15px;text-align:left;padding:0 18px 9px 18px">
      <div style="text-align:justify"><div style="text-align:center"><div style="text-align:left">
      <!-- =====================================msg4===================================================== -->
      <!-- =====================================msg4===================================================== -->
      </div></div></div></td></tr><tr><td valign="top" style="color:#606060;font-family:Helvetica;font-size:15px;line-height:150%;text-align:left;padding:0 18px 9px 18px"><div style="text-align:justify"><div style="text-align:center"><div style="text-align:left">
      <p style="text-align:left; margin:0.5em 0em 2em 0em  ;color:#606060;font:14px/19px Arial,Helvetica,sans-serif;color:#333332">
      <!-- =====================================msg5===================================================== -->
      <!-- =====================================msg5===================================================== -->
      </p></div></div></div></td></tr><tr><td valign="top" style="color:#606060;font-family:Helvetica;font-size:15px; margin:10px 0px;text-align:left;padding:0 18px 9px 18px"><div style="text-align:justify"><div style="text-align:center"><div style="text-align:left">
      <p style="text-align:left; margin:0em 0;color:#606060;font:14px/19px Arial,Helvetica,sans-serif;color:#333332; font-weight:700"><strong style="font-weight: 700">
      Sincerely,
      </strong></p><p style="text-align:left; margin:0em 0;color:#606060;font:14px/19px Arial,Helvetica,sans-serif;color:#333332;"">
      <!-- =====================================msg6===================================================== -->
      Altradex Team
      <!-- =====================================msg6===================================================== -->
      </p></div></div></div></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td align="center" valign="top" style="background-color:#ffffff;border-top:0;border-bottom:0"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse"><tbody>
      <tr><td valign="top"><table style="min-width:100%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
      <tbody><tr><td style="padding:9px" valign="top" align="center">
      <table style="min-width:100%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
      <tbody><tr><td style="padding-left:9px;padding-right:9px" align="center">
      <table style="min-width:100%;background-color:#fafafa;border:1px solid #eeeeee;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td style="padding-top:9px;padding-right:9px;padding-left:9px" valign="top" align="center">
      <table border="0" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse">
      <tbody><tr><td valign="top" align="center"><table style="display:inline;border-collapse:collapse" border="0" cellspacing="0" cellpadding="0" align="left">
      </table><table style="display:inline;border-collapse:collapse" border="0" cellspacing="0" cellpadding="0" align="left">
      </table><table style="display:inline;border-collapse:collapse" border="0" cellspacing="0" cellpadding="0" align="left">
      </table><table style="display:inline;border-collapse:collapse" border="0" cellspacing="0" cellpadding="0" align="left">
      </table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr>
      </tbody></table><table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">
      <tbody><tr><td valign="top" style="padding-top:9px">
      <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%;min-width:100%;border-collapse:collapse" width="100%">
      <tbody><tr><td valign="top" style="color:#606060;font-family:Helvetica;font-size:11px;line-height:125%;text-align:center;padding:0 18px 9px 18px"><div style="text-align:center"><em>
      <!-- =====================================msg7===================================================== -->
      Copyright © ${new Date().getFullYear()}&nbsp;Altradex.com, All rights reserved.
      </em><br></div></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></center>
      </div></body></html>`)
    })          
}

module.exports = loginTemplateModel

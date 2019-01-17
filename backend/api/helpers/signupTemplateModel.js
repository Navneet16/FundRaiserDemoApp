function data(email , ePretext , eToken){

    return `<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href='http://fonts.googleapis.com/css?family=Open:400,300,700,600' rel='stylesheet' type='text/css'>
    <head>
    <title>Altradex</title>
    <style type="text/css">
        div, p, a, li, td {
            -webkit-text-size-adjust:none;
        }
        .ReadMsgBody {
            width: 100%;
            background-color: #d1d1d1;
        }
        .ExternalClass {
            width: 100%;
            background-color: #d1d1d1;
            line-height:100%;
        }
        body {
            width: 100%;
            height: 100%;
            background-color: #d1d1d1;
            margin:0;
            padding:0;
            -webkit-font-smoothing: antialiased;
            -webkit-text-size-adjust:100%;
        }
        html {
            width: 100%;
        }
        img {
            -ms-interpolation-mode:bicubic;
        }
        table[class=full] {
            padding:0 !important;
            border:none !important;
        }
        table td img[class=imgresponsive] {
            width:100% !important;
            height:auto !important;
            display:block !important;
        }
        @media only screen and (max-width: 800px) {
        body {
         width:auto!important;
        }
        table[class=full] {
         width:100%!important;
        }
        table[class=devicewidth] {
         width:100% !important;
         padding-left:20px !important;
         padding-right: 20px!important;
        }
        table td img.responsiveimg {
         width:100% !important;
         height:auto !important;
         display:block !important;
        }
        }
        @media only screen and (max-width: 640px) {
        table[class=devicewidth] {
         width:100% !important;
        }
        table[class=inner] {
         width:100%!important;
         text-align: center!important;
         clear: both;
        }
        table td a[class=top-button] {
         width:160px !important;
            font-size:14px !important;
         line-height:37px !important;
        }
        table td[class=readmore-button] {
         text-align:center !important;
        }
        table td[class=readmore-button] a {
         float:none !important;
         display:inline-block !important;
        }
        .hide {
         display:none !important;
        }
        table td[class=smallfont] {
         border:none !important;
         font-size:15px !important;
        }
        table td[class=sidespace] {
         width:10px !important;
        }
        }
         @media only screen and (max-width: 520px) {
        }
        @media only screen and (max-width: 480px) {

         table {
         border-collapse: collapse;
        }
        table td[class=template-img] img {
         width:100% !important;
         display:block !important;
        }
        }
        @media only screen and (max-width: 320px) {
        }
    </style>
    </head>
    <body>
        <table border="0" cellpadding="0" cellspacing="0" bgcolor="#f0f0f0" height="100%" width="100%" align="center" class="m_4585596968787092300full">
             <tbody><tr>
                <td height="29">&nbsp;</td>
            </tr>
             <tr>
                <td>
                 <table width="100%" border="0" cellspacing="0" cellpadding="0" class="m_4585596968787092300full">
                    <tbody><tr>
                         <td align="center">
                            <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" class="m_4585596968787092300devicewidth">
                             <tbody><tr>
                                <td>
                                     <table style="border-radius:5px 5px 0 0;background-color:#ffffff">
                                        <tbody><tr>
                                        <td>
                                             <table width="100%" border="0" cellspacing="0" cellpadding="0" class="m_4585596968787092300full">
                                                <tbody><tr>
                                                     <td align="center">
                                                        <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" class="m_4585596968787092300devicewidth">
                                                         <tbody><tr>
                                                            <td>
                                                                 <table style="background-color:#ffffff">
                                                                    <tbody><tr>
                                                                     <td height="23">&nbsp;</td>
                                                                    </tr>
                                                                    <tr>
                                                                     <td height="75" class="m_4585596968787092300inner" style="text-align:center"><a href="#m_4585596968787092300_"><img class="m_4585596968787092300logo CToWUd" src=${process.env.EMAILER_PRETEXT + '/public/img/altradex.png2.png'} width="180" height="180" alt="Logo"></a></td>
                                                                    </tr>
                                                                    <tr>
                                                                     <td>
                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                                                                             <tbody><tr>
                                                                                <td width="23" class="m_4585596968787092300sidespace">&nbsp;</td>
                                                                                <td>
                                                                                 <table width="100%" border="0" cellspacing="0" cellpadding="0" align="left" class="m_4585596968787092300inner" id="m_4585596968787092300banner" style="border-collapse:collapse">
                                                                                    <tbody><tr>
                                                                                         <td style="font:bold 27px Arial,Helvetica,sans-serif" class="m_4585596968787092300smallfont">
                                                                                            <center></center>
                                                                                         </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                         <td height="20">&nbsp;</td>
                                                                                    </tr>
                                                                                 </tbody></table>
                                                                                </td>
                                                                                <td width="23" class="m_4585596968787092300sidespace">&nbsp;</td>
                                                                             </tr>
                                                                        </tbody></table>
                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                                                                             <tbody><tr>
                                                                                <td width="23" class="m_4585596968787092300sidespace">&nbsp;</td>
                                                                                <td>
                                                                                 <table width="100%" border="0" cellspacing="0" cellpadding="0" align="left" class="m_4585596968787092300inner">
                                                                                    <tbody><tr>
                                                                                         <td style="font:300 22px 'Open Sans',Arial,Helvetica,sans-serif;color:#333332" class="m_4585596968787092300smallfont">Hi ,</td>
                                                                                         <td class="m_4585596968787092300hide" width="23">&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                         <td height="20">&nbsp;</td>
                                                                                         <td class="m_4585596968787092300hide" height="20">&nbsp;</td>
                                                                                    </tr>
                                                                                 </tbody></table>
                                                                             </td></tr>
                                                                        </tbody></table>
                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                                                                             <tbody><tr>
                                                                                <td width="23" class="m_4585596968787092300sidespace">&nbsp;</td>
                                                                                <td>
                                                                                 <table width="100%" border="0" cellspacing="0" cellpadding="0" align="left" class="m_4585596968787092300inner">
                                                                                    <tbody><tr>
                                                                                         <td style="font:14px/19px Arial,Helvetica,sans-serif;color:#333332" class="m_4585596968787092300smallfont">You are receiving this because you (or someone else) have signed up to the ALTRADEX Exchange using your mail ID. If you are the intended recipient then </td>
                                                                                         <td class="m_4585596968787092300hide" width="23">&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                         <td height="20">&nbsp;</td>
                                                                                         <td class="m_4585596968787092300hide" height="20">&nbsp;</td>
                                                                                    </tr>
                                                                                 </tbody></table>
                                                                             </td></tr>
                                                                        </tbody></table>
                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                                                                             <tbody><tr>
                                                                                <td width="23" class="m_4585596968787092300sidespace">&nbsp;</td>
                                                                                <td>
                                                                                 <table width="100%" border="0" cellspacing="0" cellpadding="0" align="left" class="m_4585596968787092300inner">
                                                                                    <tbody><tr>
                                                                                         <td style="font:14px/19px Arial,Helvetica,sans-serif;color:#333332" class="m_4585596968787092300smallfont m_4585596968787092300readmore-button">
                                                                                            <center>
                                                                                             <a href=${ePretext + '/api/activate/' + eToken } style="font:bold 12px/29px Arial,Helvetica,sans-serif;color:#ffffff;text-decoration:none;background:#304459;padding:10px 19px;border-radius:24px;text-transform:uppercase" target="_blank"><span class="il">Activate</span></a>
                                                                                            </center>
                                                                                         </td>
                                                                                         <td class="m_4585596968787092300hide" width="23">&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                         <td height="20">&nbsp;</td>
                                                                                         <td class="m_4585596968787092300hide" height="20">&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                         <td style="font:14px/19px Arial,Helvetica,sans-serif;color:#333332" class="m_4585596968787092300smallfont">Or click on the following link, or paste this into your browser to complete the process:</td>
                                                                                         <td class="m_4585596968787092300hide" width="23">&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                         <td height="20">&nbsp;</td>
                                                                                         <td class="m_4585596968787092300hide" height="20">&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                         <td style="font:14px/19px Arial,Helvetica,sans-serif;color:#333332" class="m_4585596968787092300smallfont">${process.env.EMAILER_PRETEXT + '/api/activate/' + eToken}</td>
                                                                                         <td class="m_4585596968787092300hide" width="23">&nbsp;</td>11
                                                                                    </tr>
                                                                                    <tr>
                                                                                         <td height="20">&nbsp;</td>
                                                                                         <td class="m_4585596968787092300hide" height="20">&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                         <td style="font:14px/19px Arial,Helvetica,sans-serif;color:#333332" class="m_4585596968787092300smallfont">If you did not sign up to the ALTRADEX Exchange, please ignore this email and your email will not be used for Signup.</td>
                                                                                         <td class="m_4585596968787092300hide" width="23">&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                         <td height="20">&nbsp;</td>
                                                                                         <td class="m_4585596968787092300hide" height="20">&nbsp;</td>
                                                                                    </tr>
                                                                                 </tbody></table>
                                                                             </td></tr>
                                                                        </tbody></table>
                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                                                                             <tbody><tr>
                                                                                <td width="23" class="m_4585596968787092300sidespace">&nbsp;</td>
                                                                                <td>
                                                                                 <table width="50%" border="0" cellspacing="0" cellpadding="0" align="left" class="m_4585596968787092300inner">
                                                                                    <tbody><tr>
                                                                                         <td align="left" class="m_4585596968787092300readmore-button"><b>Thank You ,</b></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                         <td height="16">&nbsp;</td>
                                                                                         <td height="16">&nbsp;</td>
                                                                                         <td height="16">&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                         <td style="font:14px/19px Arial,Helvetica,sans-serif;color:#333332">
                                                                                           ALTRADEX Team
                                                                                         </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                         <td height="20">&nbsp;</td>
                                                                                    </tr>
                                                                                 </tbody></table>
                                                                                </td>
                                                                                <td width="23" class="m_4585596968787092300sidespace">&nbsp;</td>
                                                                             </tr>
                                                                             <tr>
                                                                                <td height="16">&nbsp;</td>
                                                                                <td height="16">&nbsp;</td>
                                                                                <td height="16">&nbsp;</td>
                                                                             </tr>
                                                                        </tbody></table>
                                                                     </td>
                                                                    </tr>
                                                                    <tr>
                                                                    </tr>
                                                                 </tbody></table>
                                                            </td>
                                                         </tr>
                                                        </tbody></table>
                                                     </td>
                                                </tr>
                                             </tbody></table>
                                        </td>
                                         <td style="border-bottom:1px solid #dbdbdb">&nbsp;</td>
                                        </tr>
                                     </tbody></table>
                                </td>
                             </tr>
                            </tbody></table>
                         </td>
                    </tr>
                    <tr>
                     <td><table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" class="m_4585596968787092300full">
                         <tbody><tr>
                            <td height="29">&nbsp;</td>
                        </tr>
                        <tr>
                                <td align="center" style="font:11px Helvetica,Arial,sans-serif;color:#000000">© 2018, All rights reserved </td>
                        </tr>
                         <tr>
                            <td height="29">&nbsp;</td>
                        </tr>
                     </tbody></table>
                    </td></tr>
                 </tbody></table>
                </td>
             </tr>
        </tbody></table>
    </body>
</html>`
}

module.exports = data

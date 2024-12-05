import Head from "next/head";
import React from "react";
import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div className="py-20">
        <div className=" bg-[#F6F9F8] relative z-20">
          <div className="container flex flex-col lg:flex-row gap-10 lg:gap-0 justify-center items-center space-x-10 py-40 ">
            <div
              data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="flex flex-col  items-center relative z-30"
            >
              <div className=" md:w-[600px] ">
                <p
                  className="text-[48px] font-rubik font-bold font-ibm px-5 md:px-16 py-5 drop-shadow-[0_4px_4px_rgba(255,255,255,5)]
                   text-transparent bg-clip-text bg-gradient-to-r from-customYellow to-customRed"
                >
                  Privacy Policy
                </p>
                <p  className="text-[20px] font-rubik font-bold font-ibm px-5 md:px-16 py-5 drop-shadow-[0_4px_4px_rgba(255,255,255,5)]
                   text-transparent bg-clip-text bg-gradient-to-r from-customYellow to-customRed">
                  Version: 1.5 - Last updated: November 29, 2024.
                </p>
              </div>
              <div className="flex mt-5 space-x-4 "></div>
            </div>

            <div
              data-aos="flip-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="flex flex-col lg:flex-row items-center lg:items-end z-30 relative"
            >
              <Image
                src="/image/svg/Privacy.svg"
                alt="Phone"
                width={476}
                height={574}
              />
            </div>
          </div>
        </div>
        <div className="container rounded-[35px] bg-gray-200 text-black shadow-md mt-10 mb-20">
          <div className="py-20">
            {/* Điều 1 */}
            <h1 className="text-2xl font-bold mb-4">Article 1. INTRODUCTION</h1>
            <ol className="list-decimal list-inside  space-y-4">
              <li>
                Welcome to the products and services operated by PioneGame
                Corporation and its subsidiaries, affiliates, and members of
                PioneGame (individually and collectively referred to as
                "PioneGame", "We", or "Our"). PioneGame takes its responsibility
                seriously regarding information security according to laws
                protecting personal information, and is committed to respecting
                the privacy and concerns of all users regarding our services.
              </li>
              <li>
                "Services" or "Services" means PioneGame's online games
                ("Games") and websites ("Website"), and any products or services
                provided by PioneGame.
              </li>
              <li>
                "Personal Data" means information in the form of symbols, words,
                numbers, images, sounds, or similar forms in an electronic
                environment related to or identifying you. The Personal Data is
                provided by you and you are responsible for the accuracy of the
                data.
              </li>
              <li>
                "Processing Personal Data" refers to one or more actions
                affecting your Personal Data, such as: collection, recording,
                analysis, verification, storage, editing, disclosure,
                combination, access, retrieval, decryption, copying, sharing,
                transmission, provision, transfer, deletion, destruction of
                Personal Data, or other related actions.
              </li>
              <li>
                By checking the box to agree to this Privacy Policy before using
                the Services, registering an account with PioneGame ("Account"),
                or accessing the Website, you confirm and agree that you
                voluntarily consent to the Processing of your Personal Data and
                accept all the methods, requirements, and policies described in
                this Privacy Policy, and hereby consent to allow PioneGame to
                Process your Personal Data as described in this Privacy Policy
                ("Consent").
              </li>
              <li className=" font-semibold">
                IF YOU DO NOT AGREE TO ALLOW PioneGame TO PROCESS YOUR PERSONAL
                DATA AS DESCRIBED IN THIS POLICY, PLEASE DO NOT REGISTER AN
                ACCOUNT, USE PioneGame'S SERVICES, OR ACCESS PioneGame'S GAMES
                OR WEBSITE.
              </li>
            </ol>
            {/* Điều 2 */}
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Article 2. WHEN WILL PioneGame COLLECT YOUR PERSONAL DATA?
            </h2>
            <ol className="list-decimal list-inside  space-y-4">
              <li>
                PioneGame will/may collect Personal Data about you in the
                following cases:
                <ol className="list-[lower-alpha] list-inside pl-6 space-y-2">
                  <li>
                    When you register and use PioneGame's Services, Games, or
                    Website, or register an Account with us.
                  </li>
                  <li>
                    When you submit any forms, including but not limited to
                    registration forms or other forms related to any of
                    PioneGame's products and services, either online or in other
                    formats.
                  </li>
                  <li>
                    When you enter into any agreements or provide other
                    documents or information related to your interaction with
                    PioneGame, or when you use our products and services.
                  </li>
                  <li>
                    When you interact with us, such as through phone calls
                    (which may be recorded), mail, fax, in-person meetings,
                    social media platforms, and email.
                  </li>
                  <li>
                    When you use PioneGame's electronic services, or interact
                    with us via Games or the Website or other Services of
                    PioneGame. This includes, but is not limited to, through
                    cookies that we may deploy when you interact with our Games,
                    Website, or Services.
                  </li>
                  <li>
                    When you make transactions through PioneGame's Games or
                    Website.
                  </li>
                  <li>
                    When you provide feedback or submit complaints to PioneGame.
                  </li>
                  <li>
                    When you register for a contest, game, event, or promotion
                    related to the Games or Services of PioneGame.
                  </li>
                  <li>
                    During your play of the Games, use of the Website, and other
                    Services of PioneGame.
                  </li>
                  <li>
                    When you submit your Personal Data to PioneGame for any
                    reason.
                  </li>
                </ol>
              </li>
              <li>
                The above are just some common cases in which PioneGame collects
                your Personal Data, and do not reflect all the instances in
                which PioneGame may collect your Personal Data.
              </li>
            </ol>

            {/* Điều 3 */}
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Article 3. WHAT PERSONAL DATA WILL PioneGame COLLECT?
            </h2>

            <ol className="list-decimal list-inside  space-y-4">
              <li>
                The Personal Data that PioneGame may collect includes, but is
                not limited to, the following basic personal data:
                <ol className="list-[lower-alpha] list-inside pl-6 space-y-2">
                  <li>Full name.</li>
                  <li>Email address.</li>
                  <li>Date of birth.</li>
                  <li>
                    Information from identification documents (ID card, Citizen
                    ID, Passport) and issuance date, issuing authority.
                  </li>
                  <li>Address (permanent address, contact address).</li>
                  <li>Phone number.</li>
                  <li>Gender.</li>
                  <li>Marital status.</li>
                  <li>Occupation.</li>
                  <li>Face photo through devices.</li>
                  <li>Payment-related information.</li>
                  <li>
                    Any other information about you: (i) when you log in to use
                    PioneGame's Services, (ii) when you use the Services, and
                    (iii) information about how you use PioneGame's Services.
                  </li>
                  <li>Aggregated data about the content users access.</li>
                </ol>
              </li>

              <li>
                We will not process any of your Personal Data that is classified
                as sensitive personal data under data protection laws.
              </li>

              <li>
                You agree not to provide us with inaccurate, misleading data and
                to notify PioneGame if there are any changes or if verification
                of information is needed.
              </li>

              <li>
                If you use a social media account (such as Facebook, Google), an
                application account (such as Apple), or a phone number to log
                in, you agree to allow PioneGame to access personal data as
                permitted by the service provider.
              </li>

              <li>
                You have the right to edit, request to provide, or delete
                personal data you have provided, or withdraw your consent at any
                time. However, withdrawing consent may affect your use of
                PioneGame's Services.
              </li>
            </ol>

            {/* Điều 4 */}
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Article 4. Collection of Other Data
            </h2>

            <ol className="list-decimal list-inside  space-y-4">
              <li>
                As with most websites and other mobile applications, the data
                that your device sends to us may include: data about you,
                recorded by a server when you use PioneGame’s Services. This
                information typically includes, but is not limited to:
                <ol className="list-[lower-alpha] list-inside pl-6 space-y-2">
                  <li>IP address.</li>
                  <li>Operating system of the computer/mobile device.</li>
                  <li>Type of browser.</li>
                  <li>
                    Type of mobile device, device characteristics, unique device
                    identification code (UDID/MEID).
                  </li>
                  <li>Referring website address (if any).</li>
                  <li>
                    The websites you visited leading to PioneGame's website or
                    mobile app and the time of visit, sometimes using "Cookies"
                    (which can be disabled using your browser’s settings) to
                    help the website remember your last visit.
                  </li>
                </ol>
                <p className="mt-2">
                  If you log in, the above information will be linked to your
                  personal Account. This information (excluding your Personal
                  Data) is also included in statistics to help us analyze how
                  customers use our Games and Website.
                </p>
              </li>

              <li>
                PioneGame's Services may use technologies such as ARKit
                (Augmented Reality or AR technology), Camera API, TrueDepth API,
                or similar technologies provided by the mobile device's
                operating system; these technologies are used to capture facial
                expressions of the user and are used for in-app functionality.
                For these types of information, we do not use them for any
                purposes other than those specified in the app. You have the
                right to deny access to the camera for these features at any
                time (but please note that if you disable camera access for the
                app, certain app features may not function); and we do not store
                or share this information with any third parties.
              </li>
            </ol>

            {/* Điều 5 */}
            <h2 className="text-2xl font-bold mt-8 mb-4">Article 5. Cookies</h2>

            <ol className="list-decimal list-inside  space-y-4">
              <li>
                Occasionally, we may use "Cookies" or other features to allow us
                or third parties to collect or share information that will help
                us improve our Website, Games, and Services we provide, or help
                us introduce new services and features. "Cookies" are
                identifiers we send to your computer or mobile device, allowing
                us to recognize your computer or device and tell us when our
                Services or Website are used or accessed, by how many people,
                and to track activities within our Website or Games. We may link
                Cookie information with Personal Data. Cookies also link to
                information about the content you selected, the shopping pages
                you viewed, or the video games you played. Cookies are also used
                to deliver content based on your interests and to track usage of
                our Services.
              </li>
              <li>
                You can decline the use of Cookies by selecting the appropriate
                settings on your browser. However, please note that if you do
                so, you may not be able to use the full functionality of our
                Website, Games, or Services.
              </li>
            </ol>

            {/* Điều 6 */}
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Article 6. How Does PioneGame Use the Personal Data You Provide?
            </h2>

            <ol className="list-decimal list-inside  space-y-4">
              <li>
                PioneGame may process your Personal Data for one or more of the
                following purposes:
                <ol className="list-[lower-alpha] list-inside pl-6 space-y-2">
                  <li>
                    To comply with legal procedures, current legal regulations,
                    and the requirements of competent state authorities.
                  </li>
                  <li>
                    To review and process your application, transactions with
                    us, or through third parties via the Services.
                  </li>
                  <li>
                    To manage, operate, provide, and oversee your use or access
                    to the Services, Website, and Games (including but not
                    limited to), your preferences, Account, as well as your
                    relationship with us.
                  </li>
                  <li>
                    To respond to, process, resolve, and complete a transaction
                    and fulfill your requests for certain Services or products.
                  </li>
                  <li>
                    To notify you about issues regarding Services and abnormal
                    Account activities.
                  </li>
                  <li>
                    To enforce our Terms of Service or any other agreements,
                    terms, or conditions applied to the end user.
                  </li>
                  <li>
                    To protect personal safety and the rights, property, or
                    safety of others, or the person under guardianship.
                  </li>
                  <li>To identify and verify your Account.</li>
                  <li>
                    To maintain and manage any software updates and other
                    updates, as well as support that may be required from time
                    to time to ensure the smooth operation of our Services.
                  </li>
                  <li>
                    To resolve or facilitate customer service departments to
                    perform reasonable requests from you or respond to any
                    inquiries made by you or someone else on your behalf,
                    provided the representative has proper authorization
                    documents from you to carry out such tasks or requests.
                  </li>
                  <li>
                    To contact you by phone, text message, fax, email, postal
                    mail, or other means for administrative purposes regarding
                    our relationship or your use of our Services, including but
                    not limited to sending you information related to our
                    Services. You acknowledge and agree that we may contact you
                    by sending mail through postal services or by sending
                    notifications through appropriate communication channels,
                    which may disclose certain Personal Data about you (e.g.,
                    revealing Personal Data on an envelope).
                  </li>
                  <li>
                    To notify you when another user has sent you a private
                    message or commented on you within the Games, Website, or
                    Services.
                  </li>
                  <li>
                    To conduct research, analysis, and development activities
                    (including but not limited to data analysis, surveys,
                    product and Service feature development and establishment)
                    to analyze how you use our Services, for the purpose of
                    improving our Services or products and enhancing your
                    customer experience.
                  </li>
                  <li>
                    To facilitate advertising and other surveys, verify the size
                    and composition of PioneGame's target audience, and
                    understand their experience with PioneGame Services.
                  </li>
                  <li>
                    For marketing purposes. In this case, through various
                    communication channels, we will send you marketing
                    information and related materials regarding PioneGame
                    products and Services and those of PioneGame’s subsidiaries,
                    affiliates, whether those products or Services are current
                    or future.
                  </li>
                  <li>
                    To create statistical reports and research for reporting and
                    accounting purposes.
                  </li>
                  <li>
                    To create statistical reports and research to meet internal
                    reporting requirements and maintain our internal records or
                    according to relevant regulations and rules.
                  </li>
                  <li>
                    To carry out procedures for background checks, verification,
                    or screening activities (including but not limited to
                    background checks) to comply with legal obligations or
                    management policies, risk control procedures that we apply,
                    and as required or enforced by law.
                  </li>
                  <li>To review the Services or operations of PioneGame.</li>
                  <li>
                    To prevent or investigate any actual or suspected violations
                    of our Terms of Service, including but not limited to fraud,
                    unlawful acts, omissions, or any other misconduct, whether
                    related to your use of our Services or any other issue
                    arising from your relationship with us.
                  </li>
                  <li>
                    To store, back up (potentially for disaster recovery
                    purposes, including but not limited to war, fire, natural
                    disasters, and other serious incidents) your Personal Data.
                  </li>
                  <li>
                    To process and facilitate a business asset transaction or a
                    potential business asset transaction, in which the
                    transaction involves PioneGame as a participant, or just
                    involves a subsidiary or affiliate of PioneGame as a
                    participant, or relates to PioneGame and any of its
                    subsidiaries or affiliates as participants, and third-party
                    organizations may also participate in the transaction.
                    "Business asset transaction" refers to any purchase, sale,
                    lease, merger, consolidation, or any other acquisition,
                    liquidation, or financing activities of an organization or
                    part of an organization or any business or assets of an
                    organization.
                  </li>
                  <li>
                    For any other purpose that we notify you at the time we ask
                    for your consent.
                  </li>
                </ol>
              </li>

              <li>
                The purposes for which we may collect, use, disclose, or process
                your Personal Data depend on the current circumstances, and the
                purpose may not be listed above. However, we will notify you of
                any such purpose when we seek your consent, unless the
                processing of Personal Data without your consent is permitted
                under data protection laws or other applicable laws.
              </li>

              <li>
                By providing consent, you agree to allow us to process your
                Personal Data for all the aforementioned purposes. If you only
                agree to one or a few purposes, please do not check the box
                agreeing to this Privacy Policy. However, please note that doing
                so may affect your ability to use our Services.
              </li>
            </ol>

            {/* Điều 7 */}
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Article 7. How Does PioneGame Protect and Store Your Personal
              Data?
            </h2>

            <ol className="list-decimal list-inside  space-y-4">
              <li>
                PioneGame implements various security measures and always
                strives to ensure the safety of your Personal Data on
                PioneGame's systems. Personal Data is stored behind secure
                networks and can only be accessed by a limited number of
                authorized personnel with special access rights to PioneGame's
                systems. However, absolute security cannot be guaranteed.
              </li>

              <li>
                The period during which PioneGame processes your Personal Data
                is calculated from the time we obtain your consent until the
                last time you use our Services and will continue for at least
                five (5) years thereafter. Even if you request the deletion of
                your Personal Data under Section 12.2, we may still need to
                retain, use, and disclose your Personal Data in accordance with
                this Privacy Policy to comply with our obligations under data
                protection laws and other relevant legal regulations.
              </li>

              <li>
                PioneGame will retain your Personal Data in compliance with data
                protection laws and other applicable legal regulations. This
                means that PioneGame has the right to delete your Personal Data
                when we have a reasonable basis to determine that (i) the
                retention of the Personal Data no longer serves the purpose for
                which it was processed, (ii) the retention is no longer
                necessary for any lawful or business purposes, and (iii) there
                are no other legitimate interests to continue storing that
                Personal Data. Depending on the applicable laws, we may delete
                your Personal Data securely without prior notice to you.
              </li>
            </ol>

            {/* Điều 8 */}
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Article 8. Does PioneGame Disclose Your Personal Data?
            </h2>
            <ol className="list-decimal list-inside  space-y-4">
              <li>
                In the course of conducting business, we may need to disclose
                your Personal Data to game developers, service providers, third
                parties, agents, and subsidiaries and affiliates and members of
                PioneGame, and other third parties, for one or more of the
                purposes mentioned above. These third-party service providers,
                agents, and subsidiaries and affiliates or members of PioneGame,
                and other third parties may process your Personal Data on our
                behalf for one or more of the above purposes. Such third parties
                include, but are not limited to:
                <ol className="list-[lower-alpha] list-inside pl-6 space-y-2">
                  <li>Subsidiaries, affiliates, and members of PioneGame</li>
                  <li>
                    Contractors, agents, service providers, and other third
                    parties that we hire to support our business operations.
                    These parties include, but are not limited to, those
                    providing administrative services or other services to us
                    such as postal companies, telecommunications companies, IT
                    companies, and data centers;
                  </li>
                  <li>
                    Buyers or other successors in the event of mergers,
                    divestitures, restructurings, reorganizations, dissolutions,
                    or sales or transfers of all or part of PioneGame's assets,
                    whether ongoing or in the process of bankruptcy,
                    liquidation, or similar proceedings, in which the Personal
                    Data PioneGame stores about our users is among the assets
                    transferred; or to a partner in a business asset transaction
                    in which PioneGame or any of its subsidiaries, affiliates,
                    or members participates.
                  </li>
                  <li>
                    Government authorities and third parties to whom we disclose
                    information for one of the purposes, and those third parties
                    will collect and process your Personal Data for one or more
                    purposes.
                  </li>
                </ol>
              </li>

              <li>
                In such cases, third parties may request us to disclose your
                game history and disclose records showing which IP addresses
                have viewed which games. We will also share statistical
                information regarding your use of the Services with these third
                parties. This will not include any information that can be used
                to identify you specifically or disclose your Personal Data.
              </li>
              <li>
                To clarify, we may disclose your Personal Data without your
                consent if data protection laws or other applicable regulations
                permit us to do so.
              </li>
              <li>
                Third parties may block or gain unauthorized access to Personal
                Data sent to or contained on the Website, software,
                applications, and technology in use, which may result in
                incorrect or non-functional operation, or someone may access,
                misuse, or abuse the information without our fault. However, we
                will implement reasonable security measures to protect your
                Personal Data as required by applicable data protection laws;
                however, we cannot guarantee absolute security, as a third party
                may gain unauthorized access to Personal Data sent to or
                contained within the Games, Website, or other software,
                applications, or technologies used, which could lead to
                incorrect operation, non-functionality, or abuse of Personal
                Data without our fault.
              </li>
            </ol>

            {/* Điều 9 */}
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Article 9. Personal Data of Children (Except Children Living in
              the EU)
            </h2>
            <ol className="list-decimal list-inside  space-y-4">
              <li>
                Our Services are diverse and cater to various age groups. For
                children under the age of 16, creating an Account and using our
                Services requires the consent and supervision of the child's
                parent or guardian.
              </li>

              <li>
                Parents or guardians of children under 16 are requested to
                supervise and ensure that the child under their care does not
                independently create an Account to use the Services and provide
                their Personal Data to us without the consent and supervision of
                the parent or guardian.
              </li>

              <li>
                In the case where Personal Data of children under 16 is provided
                to us with the consent of the parent or guardian, the parent or
                guardian agrees to the processing and use of the child's
                Personal Data and agrees to abide by this Policy on behalf of
                the child. At the same time, the parent or guardian ensures that
                the Personal Data of children aged 7 and above, for whom they
                are the guardian, has been given the child's consent, alongside
                the consent of the parent or guardian, before such data is
                provided to us.
              </li>

              <li>
                The parent or guardian of children under 16 agrees that, in
                addition to the Personal Data of the child provided by the
                parent or guardian, we may request Personal Data of the parent
                or guardian themselves for the purposes outlined in point (e) of
                Section 6.1 of this Policy.
              </li>

              <li>
                We will suspend any Account used by a child who does not comply
                with the requirements mentioned above and will remove/delete any
                Personal Data that we believe has been submitted by a child
                under 16 without meeting these requirements.
              </li>
            </ol>

            {/* Điều 10 */}
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Article 10. Personal Data Collected by Third Parties
            </h2>
            <ol className="list-decimal list-inside  space-y-4">
              <li>
                Our Services may use analytics tools (such as Google Analytics,
                Facebook Pixel, etc.) ("Analytics Tools"). These Analytics Tools
                may use Cookies, which are text files placed on your device, to
                help the website analyze how users use our Services. The
                information generated by the Cookies regarding your use of the
                website (including your IP address) will be sent to and stored
                by the Analytics Tools provider. The Analytics Tools provider
                will use this information to evaluate your use of our Services,
                prepare reports on website activity for website operators, and
                provide other services related to website activity and internet
                usage.
              </li>

              <li>
                Our Services may use measurement tools (such as AppsFlyer,
                Adjust, Firebase, etc.) ("Mobile Measurement Partner",
                abbreviated as "MMP"). These MMPs use Software Development Kit
                ("SDK") embedded in your device to help us track and optimize
                the delivery of our Services to you. The information generated
                by the SDK regarding your use of our app (including your IP
                address) will be sent to and stored by the MMP provider. The MMP
                provider will use this information to evaluate your use of our
                Services, prepare reports on app activity for developers, app
                operators, and provide other services related to app activity
                and internet usage.
              </li>

              <li>
                Our Services may also use TruelD, a face and ID document
                recognition app (such as national ID, passport) provided by
                PioneGame Software Development Co., Ltd. – a member company of
                PioneGame ("TrueID") to enhance account security. TruelD will
                use the camera on your device to record and capture your face
                and ID documents, applying algorithms and AI (artificial
                intelligence) to detect anomalies (such as fraud, mismatches
                between faces and ID photos, etc.). TruelD will help us detect
                anomalies and provide recommendations to authenticate your
                account. TrueID may send this information to third parties for
                storage and processing if required by law or if the third party
                processes the information on behalf of TrueID. TrueID also has
                an obligation to ensure the security of your Personal Data
                stored and processed by TrueID in the same way as PioneGame's
                security obligations.
              </li>

              <li>
                We, and third parties, may provide software application
                downloads for you to use through or on our Services. These
                applications may access independently, allowing third parties to
                view your identification information, such as your name, user
                ID, IP address of your device, or other information such as the
                Games you are playing during any specific access session, and
                any cookies or SDKs that you may have installed or were
                installed for you by a third-party application or website.
                Additionally, these applications may require you to provide
                further information directly to third parties. Products or
                services from third parties provided through these applications
                are not owned or controlled by PioneGame. You should read the
                terms and policies published by these third parties on their
                websites or elsewhere.
              </li>
            </ol>

            {/* Điều 11 */}
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Article 11. Disclaimers on Privacy Obligations and Third-Party
              Websites
            </h2>
            <ol className="list-decimal list-inside  space-y-4">
              <li>
                PioneGame DOES NOT GUARANTEE THE CONFIDENTIALITY OF PERSONAL
                DATA AND OTHER INFORMATION YOU PROVIDE ON THIRD-PARTY WEBSITES
                OR APPLICATIONS. We implement various security measures to
                maintain the safety of your Personal Data that we store or
                control. Your Personal Data is stored behind secure networks and
                can only be accessed by a limited number of individuals with
                special access rights to our systems, and these individuals are
                required to keep the data confidential. When you begin using our
                Services or accessing your Personal Data, we recommend using a
                secure device. All Personal Data you provide will be encrypted
                in our databases and can only be accessed as described above.
              </li>

              <li>
                To provide you with added value, we may choose to link to
                third-party websites or integrate them within our Website or
                Games. We may also engage in co-marketing relationships and
                other partnerships to offer e-commerce services, advertisements,
                and other services and features to visitors. These linked
                websites have their own privacy policies and security measures
                that are independent. Even if a third party is linked to us, we
                do not control these linked websites, each of which has its own
                privacy protection and data collection methods that are
                independent of us. Data collected by our co-marketing partners
                or third-party websites (even if provided on or through our
                Website or Games) may not be shared with us.
              </li>

              <li>
                As a result, we are not responsible or legally liable for the
                content, security measures (or lack thereof), and activities of
                third-party websites or applications. We protect the integrity
                of our Website and Games, including links placed on those
                websites, and we welcome feedback on these linked websites
                (including, but not limited to if a specific website is not
                functioning) through the contact information provided in Section
                15 of this Policy.
              </li>
            </ol>

            {/* Điều 12 */}
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Article 12. How Can You Withdraw Your Consent, Modify, Request
              Correction, Provide or Delete Personal Data You Have Provided to
              Us?
            </h2>
            <ol className="list-decimal list-inside  space-y-4">
              <li>
                Withdraw Consent
                <ol className="list-[lower-alpha] list-inside pl-6 space-y-2">
                  <li>
                    You can withdraw your consent for the collection, use, and
                    disclosure of your personal data that we store or control by
                    following the instructions at the Account Settings page of
                    our platform. We will process the request according to the
                    guidelines of this Privacy Policy, the instructions and
                    procedures on the Account Settings page, and our obligations
                    under applicable law.
                  </li>
                  <li>
                    You understand that withdrawing your consent will not affect
                    the legality of the processing of data that we have already
                    processed prior to your withdrawal of consent.
                  </li>
                  <li>
                    However, you should be aware that withdrawing your consent
                    means that we will not be able to continue providing you
                    with our Services.
                  </li>
                </ol>
              </li>

              <li>
                Modify, Request Correction, Provide, or Delete Personal Data
                <ol className="list-[lower-alpha] list-inside pl-6 space-y-2">
                  <li>
                    Once you have registered an Account with us, you can access
                    and view or edit your Personal Data that we have collected,
                    are storing, or controlling according to your consent via
                    our available system. If you have not registered an Account
                    with us, or for certain Personal Data where we have a
                    separate process for modification, you can request to modify
                    your Personal Data stored or controlled by us using the
                    methods specified on our Support and Customer Care page. We
                    will process your request according to this Privacy Policy,
                    the Support and Customer Care procedures, and our
                    obligations under applicable law.
                  </li>
                  <li>
                    You can monitor the Personal Data we store or control by
                    checking your Personal Data displayed at your Account
                    Settings page or by requesting us to provide it through
                    other methods as specified on our Support and Customer Care
                    page. Your legal guardian or an authorized person may also
                    make a request on your behalf. We will process your request
                    according to this Privacy Policy, the Support and Customer
                    Care procedures, and our obligations under applicable law.
                  </li>
                  <li>
                    You can request us to delete your Personal Data that we are
                    storing or controlling if (i) you believe your Personal Data
                    is no longer necessary for the purposes for which consent
                    was provided, (ii) you withdraw your consent as per Section
                    12.1, (iii) you object to our processing of your Personal
                    Data and we have no legitimate grounds to continue
                    processing it, (iv) we are processing your Personal Data
                    outside the scope of the purposes for which consent was
                    given, or (v) other reasons as prescribed by data protection
                    laws. You can request us to delete your Personal Data using
                    the methods provided on our Account Settings page. However,
                    you should note that requesting the deletion of your
                    Personal Data means that we will no longer be able to
                    provide Services to you, and we may need to terminate our
                    current relationship with you and your contract with us
                    without compensating you for any losses.
                  </li>
                  <li>
                    You should note that, in any case, we will need sufficient
                    information from you to verify your identity and understand
                    the nature of your request in order to process it according
                    to our procedures.
                  </li>
                  <li>
                    We may charge a reasonable fee for processing and resolving
                    your request. If we charge a fee, we will provide you with
                    the cost and payment deadline in writing or via email. You
                    are required to make the payment within the specified
                    deadline for us to respond to or process your request in a
                    timely manner.
                  </li>
                  <li>
                    We reserve the right to refuse to provide or delete your
                    Personal Data in certain cases as prescribed by law.
                  </li>
                </ol>
              </li>
            </ol>

            {/* Điều 13 */}
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Article 13. Supplementary Provisions for Users in the European
              Union (EU)
            </h2>
            <p className=" mb-4">
              The provisions in this section apply only if you are residing in
              the European Union ("EU"). These provisions take precedence over
              other provisions in this Privacy Policy in case of any
              discrepancy.
            </p>

            <ol className="list-decimal list-inside  space-y-4">
              <li>
                Data Portability
                <ol className="list-[lower-alpha] list-inside pl-6 space-y-2">
                  <li>
                    You have the right to receive from us the personal data you
                    have previously provided and information that has been
                    processed based on your consent, in a structured, commonly
                    used, and machine-readable format, and the right to request
                    us to transfer this data to another party.
                  </li>
                  <li>
                    If you want us to transfer your personal data to a third
                    party, please provide the details of the third party, and
                    note that we can only comply with your request if it is
                    technically feasible. We are not responsible for the
                    security of your personal data or the data processed as a
                    result of your personal data processing once it is
                    transferred to the third party.
                  </li>
                </ol>
              </li>

              <li>
                Data Deletion
                <ol className="list-[lower-alpha] list-inside pl-6 space-y-2">
                  <li>
                    You can request us to delete your personal data in the
                    following cases:
                    <ul className="list-disc pl-6">
                      <li>
                        You believe that the personal data is no longer
                        necessary for us to retain.
                      </li>
                      <li>
                        You want to withdraw your consent, and we no longer have
                        a lawful reason to continue processing the data.
                      </li>
                      <li>
                        You do not want us to continue using your personal data
                        for sending advertisements or special offers.
                      </li>
                      <li>
                        You believe that your personal data has been processed
                        unlawfully.
                      </li>
                    </ul>
                  </li>
                  <li>
                    We may retain personal data if there is a legal basis to do
                    so under applicable laws.
                  </li>
                </ol>
              </li>

              <li>
                Data Retention
                <p>
                  We retain your personal data as long as necessary to provide
                  services or products to you or as required by law. If you
                  request deletion of your personal data, we will do so within
                  30 days or notify you if additional time is needed.
                </p>
              </li>

              <li>
                Objection to Marketing Programs
                <p>
                  You have the right to object to the processing of your
                  personal data for sending advertising programs, special
                  offers, and marketing messages. We will cease processing if
                  required by law, but may retain the data if there is a lawful
                  reason.
                </p>
              </li>

              <li>
                Restriction of Data Processing
                <p>
                  You have the right to request us to restrict the processing of
                  your personal data to storage only when:
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    You believe that your personal data is inaccurate and
                    requires time to verify.
                  </li>
                  <li>
                    You request that we only store the data if you want it
                    deleted but do not want us to delete it.
                  </li>
                  <li>
                    You request the storage of personal data to establish or
                    defend legal claims.
                  </li>
                </ul>
              </li>

              <li>
                Transfer of Personal Data Outside the EU
                <p>
                  Your personal data may be transferred outside of the EU. We
                  will ensure that the recipient of the data complies with data
                  protection regulations.
                </p>
              </li>

              <li>
                Children’s Information
                <p>
                  These services are not intended for children under the age of
                  16 in the EU. We do not collect information from children
                  under the age of 16. Accounts for children will be locked, and
                  data will be deleted.
                </p>
              </li>
            </ol>

            {/* Điều 14 */}
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Article 14. Storage and Transfer of Personal Data to Other
              Countries
            </h2>
            <ol className="list-decimal list-inside  space-y-4">
              <li>
                For services provided to the Vietnamese market by PioneGame and
                its subsidiaries, affiliates, or members with headquarters in
                Vietnam, your personal data will be stored in Vietnam in
                accordance with Vietnamese law.
              </li>

              <li>
                For the personal data of EU users, the provisions in Section 13
                of this Policy will apply.
              </li>
            </ol>

            {/* Điều 15 */}
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Article 15. Complaints, Feedback, and Contacting PioneGame
            </h2>
            <p className="">
              If you have any questions, feedback, or inquiries regarding this
              Policy, please contact us via email at:
            </p>
            <p className="mt-2 text-blue-600 underline">contact@qunest.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

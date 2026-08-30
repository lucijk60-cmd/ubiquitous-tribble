const amazonAffiliateLink =
  "PASTE-YOUR-AMAZON-AFFILIATE-LINK-HERE";


function goToAmazon() {

  if (
    !amazonAffiliateLink ||
    amazonAffiliateLink.includes("PASTE-YOUR")
  ) {
    alert("Amazon affiliate link is not configured yet.");
    return;
  }

  window.location.href = amazonAffiliateLink;
}


function closeOffer() {

  document.querySelector(".card").innerHTML = `
    
    <h1>Maybe Later</h1>

    <p>
      You can return whenever you're ready.
    </p>

  `;
}

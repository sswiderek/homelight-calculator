document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("calculateButton").addEventListener("click", function () {
    const avgHomePrice = parseFloat(document.getElementById("avgHomePrice").value);
    const loanCommissionRate = parseFloat(document.getElementById("loanCommissionRate").value);
    const dealsPerMonth = parseFloat(document.getElementById("dealsPerMonth").value);
    const conversionRate = parseFloat(document.getElementById("conversionRate").value);
    const referralRate = parseFloat(document.getElementById("referralRate").value);

    if (
      isNaN(avgHomePrice) ||
      isNaN(loanCommissionRate) ||
      isNaN(dealsPerMonth) ||
      isNaN(conversionRate) ||
      isNaN(referralRate)
    ) {
      document.getElementById("results").innerHTML = "<p style='color: red;'>Please fill in all fields.</p>";
      return;
    }

    const additionalDeals = dealsPerMonth * (conversionRate / 100);
    const additionalAnnualCommission = additionalDeals * avgHomePrice * (loanCommissionRate / 100) * 12;
    const newCustomerRate = conversionRate;
    const referralGrowth = referralRate;

    document.getElementById("results").innerHTML = `
      <p>💼 <strong>Additional Monthly Deals:</strong> ${additionalDeals.toFixed(1)}</p>
      <p>💰 <strong>Additional Annual Commission:</strong> $${additionalAnnualCommission.toLocaleString()}</p>
      <p>📈 <strong>New Customer Conversion Rate:</strong> ${newCustomerRate.toFixed(1)}%</p>
      <p>📊 <strong>Referral Business Growth:</strong> ${referralGrowth.toFixed(1)}%</p>
    `;
  });
});

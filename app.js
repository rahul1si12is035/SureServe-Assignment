function myFunction(){
				var event = new Date(document.getElementById("date").value);
				var claimId= document.getElementById("claim").value;
				var myKeyVals = {claimNumber: claimId, date: event.toISOString()}
				var result;
                var saveData = $.ajax({
                  type: 'POST',
                  url: "https://www.medibuddy.in/WAPI//infiniti/track/ClaimWithClaimNumber.json",
                  data: myKeyVals,
                  dataType: "text",
                  success: function(resultData) {
					 var codes = jQuery.parseJSON(resultData);
					 console.log(codes);
					 document.getElementById("claim id").innerHTML = (codes.claimDetails["0"].claimDetails.claimId);
					 document.getElementById("claim amount").innerHTML = (codes.claimDetails["0"].claimDetails.clmAmount);
					 document.getElementById("hospital name").innerHTML = (codes.claimDetails["0"].claimDetails.hospitalName);
					 document.getElementById("claim status").innerHTML = (codes.claimDetails["0"].claimDetails.claimStatus);
                }
				});
			}	
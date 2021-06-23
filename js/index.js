$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	if(scroll < 50){
		$('.main').css('background', 'transparent');
	} else{
		$('.main').css('background', 'rgba(0, 0, 0, 0.85)');
	}
});

$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	var hl = window.innerHeight*0.90;
	if(scroll < hl){
		$('#menuToggle span').css('background', '#fff');
	} else{
		$('#menuToggle span').css('background', '#ea4335');
	}
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

function confirmEmail() {
	var email = document.getElementById("email").value
	var confemail = document.getElementById("confemail").value
	if(email.toLowerCase() != confemail.toLowerCase()) {
		alert('Email Not Matching!');
	}
}

var select = document.getElementById("select"),
arr = ['AMITY UNIVERSITY RAJASTHAN', 'Adhiparashakti Engineering College, Kancheepuram Dist', 'Adhiyamaan College Of Engineering, Krishnagiri Dist', 'All India Shri Shivaji Memorial Society, College Of Engineering, Pune', 'All India Shri Shivaji Memorial Societys Polytechnic, Pune', 'All India Ssm Societys College Of Engineering, Pune', 'Anand Engineering College, Uttar Pradesh', 'Anna University, Chennai', 'Anuradha College Of Engineering, Buldana(Mah.)', 'Anuradha Engineering College, Buldana', 'Apex Institute Of Engineering And Technology, Jaipur', 'Assam Engg College, Assam', 'B.M.S.College Of Engineering, Bangalore', 'BIT Mesra, Ranchi', 'BITS Pilani, Rajasthan', 'Babu Banarasi Das National Institute of Technology and Management, Uttar Pradesh', 'Backward Class Youth R.Communication, Nagpur', 'Banasthali University, Tonk(Rajasthan)', 'Bapuji Inst Of Engg And Tech, Davangere', 'Beant College Of Engg. And Technology, Amritsar(Punjab)', 'Behrampur University, Gandhi Institute Of Technology, Orissa', 'Bharat Institute Of Technology, Uttar Pradesh', 'Bharat Shikshan Sansthas Pimpri Chinchwad Polytechnic, Pune', 'Bharathidasan Institute Of Engineering And Technology, Tiruchirappalli', 'Bharati Vidyapeeth College Of Engineering, Pune', 'Bharati Vidyapeeths Institutet.Of Technology, Mumbai', 'Bharati Vidyapeeths J.N.Instt.Of Tech, Pune', 'Bharti Vidhyapeeth Mumbai', 'Bhavana Trusts Shah And Anchor Kutchi Polytechnic, Mumbai', 'Bhoj Reddy Engineering College For Women, Hyderabad', 'Bits Goa', 'Bundelkhand Institute Of Engineering And Technology, Jhansi', 'C.R. State College Of Engg, Haryana', 'C.V. Raman College Of Engineering, Bhubhaneshwar', 'Central Electro Chemical Resarch Institute, Karaikudi', 'Chaitanya Bharathi Institute Of Technology,  Gandhipet, Hyderabad', 'Coimbatore Institute Of Technology', 'College Of Engg. And Technology, Akola', 'College Of Engineering And Technology, Jalgaon', 'College Of Engineering Pune', 'D V R College Of Engineering And Technology', 'D. G. Ruparel College, Mumbai', 'DIT Dehradun', 'Datta Meghe College Of Engineering, Thane', 'Dayanand Sagar College Of Engineering, Bangalore', 'Deenbandhu Chhotu Ram University of Science & Technology,Murthal,Haryana', 'Delhi College Of Engineering., Shahbad Daulatpura', 'Dharmsinh Desai Institute Of Technology, Nadiad, Kheda', 'Dr Navalar Nedunchezhian College Of Engineering, Vaithiyanathapuram, Tholudur', 'Dr. Ambedkar Inst. Of Teach. Of Handicapped, Kanpur', 'Dr. B.R. Ambedkar National Institute Of Technology, Jalandhar', 'Dr. B.R. Ambedkar National Institute Of Technology, Punjab', 'Dr. Babasaheb Ambedkar Marathwada University, Aurangabad', 'Dr. K.N. Modi Institute Of Engineering And Tech, Up', 'Dr. SS Bhatnagar UICET Panjab University', 'Dr.Babasaheb Ambedkar Technological University(Inst. Of Petrochemical Engg)', 'Dr.D.Y.Patil Pratishthan D.Y. Patil College Of Engineering And Tech, Pune', 'Dr.\xa0S. S. Bhatnagar\xa0University Institute of Chemical Engineering & Technology, Punjab', 'Durgapur Institute Of Advanced Tech And Management, West Bengal', 'Dwarkadas J.Sanghvi College Of Engg., Mumbai', 'Edayathangudi G.S. Pilay Engineering College, Nagore', 'Erode Sengunthar Engineering College, Thudupathi', 'Faculty Of Engineering And Technology, Up', 'Faculty Of Technology And Engg, M.S.Univ Of Baroda', 'G.H. Patel College Of Engg. And Technology, Bakool Road, Vallabh Vidyanagar Dist Anand', 'GURU GHASIDASH VISHWAVIDYALAYA BILASPUR (CG)', 'Gandhi Institute Of Engg. And Tech., Rayagada', 'Gayatri Vidya Prasihad College Of Engineering, Visakhapatnam', 'Gharda Institute Of Technology, Ratnagiri', 'Gokul Institute Of Technology And Science , Ap', 'Government College Of Engineering And Textile Technology, Hoogly', 'Government Engineering College, Gandhinagar', 'Government Engineering College,Valsad, Gujarat', 'Government. Engineering College, Kerala', 'Government. Engineering College, Vivattom Thrissur', 'Govt. Engineering College , Gandhi Nagar', 'Govt. Polytechnic, Arvi(Mah.)', 'Govt. Polytechnic, Aurangabad', 'Govt. Polytechnic, Raigarh', 'Govt. Polytechnic, Thane', 'Govt. Polytechnic, Yavatmal (MAH.)', 'Haldia Institute Of Technology, Haldia', 'Harcourt Butler Technological Institute, Kanpur', 'Hindustan College Of Science And Technology, Agra', 'Homi Bhabha National Institute, Mumbai', 'Hope Foundation And Research Centre, Finolex Academy Of Management And Tech, Ratnagiri', 'IIT Bhubaneswar, Odisha', 'IIT Bombay, Maharashtra', 'IIT Delhi, New Delhi', 'IIT Gandhinagar, Gujarat', 'IIT Guwahati, Assam', 'IIT Hyderabad, Andhra Pradesh', 'IIT Indore, Madhya Pradesh', 'IIT Jodhpur, Rajasthan', 'IIT Kanpur, U.P.', 'IIT Kharagpur, W.B.', 'IIT Madras, Tamilnadu', 'IIT Mandi, Himachal Pradesh', 'IIT Patna, Bihar', 'IIT Roorkee, Uttarakhand', 'IIT Ropar, rupnagar, Punjab', 'IIT Varanasi, BHU, UP', 'ISM Dhanbad, Jharkhand', 'Indian Institute of Information Technology and Management (ABV-IIITM),\xa0Gwalior', 'Indira Gandhi Institute Of Technology, Dhenkanal', 'Institute Of Chemical Technology, Mumbai', 'Institute Of Engineering And Sciences, Indore', 'Institute Of Engineering And Technology, Ap', 'Institute Of Engineering And Technology, Bareilly', 'Institute Of Engineering And Technology, Haryana', 'Institute Of Engineering And Technology, Kanpur', 'Institute Of Engineering And Technology, Lucknow', 'Institute Of Engineering, Jiwaji University, Gwalior', 'Institute Of Technology And Management, Gwalior', 'Institute Of Technology Howrah', 'Institute Of Technology, Banaras Hindu University', 'Institute Of Technology, Gmr Nagar, Ap', 'Institute Of Technology, Guru Ghasidas University, Koni, Bilaspur, Chhattisgarh', 'Institute Of Technology, Sangli', 'Jadavpur University, Jadavpur, Calcutta', 'Jagannath Instt For Tech. And Management, Orissa', 'Jawaharlal Darda Institute Of Engineering And Technology Gandhi Bhavan', 'Jawaharlal Nehru College, Aurangabad', 'Jawaharlal Nehru Engineering College, Pune', 'Jaypee University of Engg and Tech., Guna, Madhya Pradesh', 'Jld Institute Of Engineering, Yavatmal(Mah.)', 'Jpml Institute Of Engineering, Haryana', 'K. K. Wagh College Of Engineering Education And Research, Nashik', 'K.K. Wagh Womens Polytechnic, Nasik', 'K.K.Wagh Institute Of Engineering Education And Research, Pune', 'K.L.E Society College Of Engg. And Tech, Karnataka', 'Kes College Of Engineering, Raigarh', 'Khalapur Taluka Shikshan P. Mandals Khopoli Polytechnic, Raigarh', 'Kolhapur Institute Of Technology', 'Koneru Lakshmaiah University, Andhra Pradesh', 'Kongu Engineering College, Perundurai, Erode Dist', 'L.D.College Of Engineering, Near Gujarat University Navrangpura, Ahmedabad', 'Laxminarayan Institute Of Technology, Nagpur', 'Lovely Professional University, Punjab', 'M.B.M. Engg College, Jodhpur', 'MJP Rohilkhand university, Uttar Pradesh', 'Madhav Instt. Of Tech. And Science, Gwalior(Mp)', 'Maharaj Vijayaram Gajapathiraj College For Engineering, Ap', 'Maharashtra Institute Of Technology, Pune', 'Mahatma Gandhi Mission College Of Engineering And Technology, Thane', 'Mahatma Gandhi Mission Jawaharlal Nehru College Of Engg., Aurangabad', 'Malaviya National Institute Of Technology, Jaipur', 'Marathwada Univesity, Aurangabad', 'Marwadi Education Foundation Group of Institutions, Gujarat', 'Meerut Institute Of Engineering And Technology, Meerut', 'Mohammed Sathak Engineering College, Ramanathapuram Dist', 'Moradabad Institute Of Techhnology, Up', 'Motilal Nehru National Institute Of Technology, Allahabad', 'Mvj College Of Engg. Channasandra, Karnataka', 'N.Y.S.S.S Shreeram Polytechnic, Thane', 'NIT Bhopal', 'NIT Calicut, Kerala', 'NIT Delhi, New Delhi', 'NIT Durgapur, W.B.', 'NIT Goa, Farmagudi, Goa', 'NIT Hamirpur, Himachal Pradesh', 'NIT Imphal, Manipur', 'NIT Jaipur, Rajasthan', 'NIT Jalandhar, Punjab', 'NIT Jamshedpur, Jharkhand', 'NIT Kurukshetra, Haryana', 'NIT Meghalaya', 'NIT Mizoram', 'NIT Nagaland', 'NIT Nagpur, Maharashtra', 'NIT Patna, Bihar', 'NIT Puducherry, Pondicherry', 'NIT Rourkela, Rourkela, Odisha', 'NIT Sikkim', 'NIT Silchar, Assam', 'NIT Srinagar, J & K', 'NIT Surat, Gujarat', 'NIT Surathkal, Karnataka', 'NIT Trichy, Tamil Nadu', 'NIT Uttarakhand', 'NIT Warangal, Andhra Pradesh', 'Nagar Yuwak Shikshan Sansthas Shri Datta Meghe Polytechnic, Nagpur', 'Nalla Malla Reddy Engineering College, Ap', 'Narayan Nagu Patil Engineering College, Mumbai', 'National Institute Of Industrial Engineering, Mumbai', 'National Institute Of Technology Calicut, Kerala', 'National Institute Of Technology Mahatma Gandhi Avenue, Durgapur, Burdwan', 'Navjeevan Education Societys Polytechnic, Bhandup', 'Nirma Institute Of Technology', 'Nit Raipur', 'Nit Raipur, Raipur, Chattisgarh', 'North Maharashtra University, Jalgaon', 'North Maharashtra University, Jalgaon', 'Osmania University', 'Padmabhooshan Vasantdada Patil Institute Of Technology', 'Padmashri Dr. B.V.raju institute of technology, Andhra Pradesh', 'Pallavan College Of Engineering, Kancheepuram Taluk And Tamil Nadu', 'Pondicherry Engg. College, Pondicherry', 'Pravara Rural College Of Engineering, Mumbai', 'Priyadarshini Institute Of Engineering And Tech, Shivangaon', 'Punjab University, Chandigarh', 'R V College Of Engg., Bangalore', 'R V R & J C College Of Engineering, AP', 'RGIPT, U.P.', 'RGU-IIIT BASAR, AP', 'Raipur Institute Of Tech, Chhattisgarh', 'Rajiv Gandhi University of Knowledge Technologies, Nuzvid, AP', 'S.B.S. College Of Engg. And Technology, Ferozpur', 'S.C.Ri.E.T. , C.C.S. University Campus, Meerut, UP', 'S.D. College Of Engineering And Technology, Muzaffarnagar(Up)', 'S.D.M College Of Engg And Tech, Dharwad', 'S.S.N COLLEGE OF ENGINEERING CHENNAI', 'S.V.National Institute Of Technology, Surat', 'SLIET, Sangrur, Punjab', 'SREE NIDHI INSTITUTE OF SCIENCE & TECHNOLOGY, A.P.', 'Samarth Samajs S.H.Jondhale Polytechnic, Thane', 'Samrat Ashok Technological Institute ,Vidisha, M.P.', 'Sant Gadge Baba Amravati University', 'Sant Harchand Singh Longowal Central Inst. Of Engg And Tech, Longowal, Punjab', 'Sarvajanik College Of Engg. And Technology, Surat', 'Sastra University, Thirumalaisamudram', 'Satara Education Societys Polytechnic, Satara', 'Seedling Academy Of Design Tech. And Mngt, Jaipur', 'Seth Jai Parkash Mukand Lal Inst. Of Engg And Tech., Haryana', 'Shivajirao S. Jondhale College Of Engg, Dombivli', 'Shivajirao S. Jondhole College Of Engineering, Thane', 'Shree Sant Muktabai Instt.Of Tech.(POLY), Jalgaon', 'Shri Bhagubhai Mafatlal Poly, Mumbai', 'Shri Guru Gobind Singhji Institute of Engineering & Technology, Nanded, Maharashtra', 'Shri Sad Vidya Mandirs College Of Engineering And Technology, Gujarat', 'Sinhagad College of Engineering, Maharashtra', 'Sinhgad College Of Engineering, Pune', 'Sir Visvesvaraya Memorial Engineering College, Nashik', 'Sri Ram Engineering College, Tiruvallur', 'Sri Ramakrishna Engineering College, Tamil Nadu', 'Sri Sivasubramaniya Nadar College Of Engineering, Kacheepuram', 'Sri Venkateswara College Of Engineering, Tamil Nadu', 'St. Josephs Colllege Of Engineering, Tamil Nadu', 'St. Peters Engineering College, Tamil Nadu', 'St. Stanley College Of Engineering And Technology, Ap', 'Suresh Gyan Vihar University, Rajasthan', 'Swami Dayanand University, Choturam State College Of Engineering, Sonepat', 'Swami Ramanandatirtha Institute Of Science And Technology, Nalgonda Distt., Andhra Pradesh', 'T.K.M. College Of Engg., Kollam, Kerala', 'T.K.M. College Of Engg., Kollam, Kerala', 'Tatya Saheb Kore Institute Of Engineering And Tech., Kolhapur', 'Thadomal Shahani Engineering College', 'Thapar Institute Of Engineering And Technology, Punjab', 'The Maharaja Sayaji Rao University, Baroda(Gujarat)', 'Thirumalai Engineering College, Tamil Nadu', 'UIT - Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal', 'Ujjain Engineering College', 'University College Of Sciences And Technology, Calcutta', 'University College Of Technology, Hyderabad', 'University Of Petroleum And Energy Studies, Dehradun', 'V.R. Siddhartha Engineering College, AP', 'Vel Sri Rangarajan Sakunthala High Technology Engineering College, Chennai', 'Vidya Prasarak Mandal Polytechnic, Thane', 'Vignan Engineering College, Ap', 'Vishveshvarya National Institute Of Technology, Nagpur', 'Vishwakarma Institute Of Technology, Pune', 'Vivekananda Institute Of Technology, Bangalore', 'WAINGANGA COLLEGE OF ENGINEERING AND MANAGEMENT, Maharashtra', 'Watemull Institute Of Electrical Engineering, Mumbai', 'Zakir Hussain College Of Engg And Technology, Aligarh'];

for (var i = 0; i < arr.length; i++) {
	var option = document.createElement ("OPTION"),
	txt = document.createTextNode(arr[i]);
	option.appendChild(txt);
	option.setAttribute("value",arr[i]);
	select.insertBefore(option,select.lastChild);
}


var select2 = document.getElementById("select2"),
arr2 = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "National Capital Territory of Delhi union territory", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

for (var i = 0; i < arr2.length; i++) {
	var option2 = document.createElement ("OPTION"),
	txt2 = document.createTextNode(arr2[i]);
	option2.appendChild(txt2);
	option2.setAttribute("value",arr2[i]);
	select2.insertBefore(option2,select2.lastChild); 
}   


$('select').on('change', function() {
	if ($(this).val()) {
		return $(this).css('color', 'white');
	}
});


$(".hover").mouseleave(
	function() {
		$(this).removeClass("hover");
	}
	);
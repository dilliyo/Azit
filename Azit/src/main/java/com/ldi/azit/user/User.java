package com.ldi.azit.user;


import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

	
	private String userNo;
	private String userName;
	private String userEmail;
	private String userPassword;
	private String userPhone;
	private String userBirth;
	private String userLocation;
	private Date userDate;
	
}

package com.ldi.azit.nav;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Nav {
	
	private int navNo;
	private String navNameKr;
	private String navNameEn;

	
}

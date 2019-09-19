package com.ldi.azit.nav;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

@Mapper
@Primary
public interface NavMapper {

	public List<Nav> getNav();

}

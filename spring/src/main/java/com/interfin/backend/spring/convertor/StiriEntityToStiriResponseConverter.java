package com.interfin.backend.spring.convertor;

import com.interfin.backend.spring.entity.StiriEntity;
import com.interfin.backend.spring.model.response.StiriResponse;
import org.springframework.core.convert.converter.Converter;

public class StiriEntityToStiriResponseConverter implements Converter<StiriEntity, StiriResponse> {
    @Override
    public StiriResponse convert(StiriEntity stiriEntity) {

        StiriResponse stiriResponse = new StiriResponse();
        stiriResponse.setTitlu(stiriEntity.getTitlu());
        stiriResponse.setContinut(stiriEntity.getContinut());

        return stiriResponse;
    }
}

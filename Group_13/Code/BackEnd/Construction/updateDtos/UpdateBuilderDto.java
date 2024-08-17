package com.construction.updateDtos;

import com.construction.enums.Availability;
import com.construction.enums.ConstructionType;
import com.construction.enums.RequestStatus;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
@AllArgsConstructor
@JsonPropertyOrder({ "builderId" })
public class UpdateBuilderDto {

	@JsonProperty(access = Access.READ_ONLY)
	private Integer id;

	@JsonProperty(access = Access.READ_ONLY)
	private String contactNumber;

	@JsonProperty(access = Access.READ_ONLY)
	private RequestStatus requestStatus;
	
	private int yearsOfExperience;

	@NotNull
	private double ratePerMonth;

	private ConstructionType constructionType;

	@Size(min = 10, max = 10)
	private String emergencyContactNumber;

	private Availability availability;

}

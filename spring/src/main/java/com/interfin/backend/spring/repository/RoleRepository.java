package com.interfin.backend.spring.repository;

import com.interfin.backend.spring.model.Role;
import com.interfin.backend.spring.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);

//    String QUERY = "select m from Role m where m.id = ?1";
//
//    @Query(QUERY)
//    Role findByIdRolesAllowed(Long id);

}
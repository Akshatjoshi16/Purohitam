package com.purohitam.config;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;

@Service
public class JwtService {

    private static final String SECRET_KEY = "mysecretkeymysecretkeymysecretkey12345";
    private static final long EXPIRATION = 1000 * 60 * 60 * 24; // 24 hours

    private Key getSignKey() {
        return Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
    }

    // =========================
    // Generate JWT Token
    // =========================
    public String generateToken(String email) {

        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))
                .signWith(getSignKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    // =========================
    // Extract Email
    // =========================
    public String extractEmail(String token) {
        return extractAllClaims(token).getSubject();
    }

    // =========================
    // Extract Claims
    // =========================
    private Claims extractAllClaims(String token) {

        return Jwts.parserBuilder()
                .setSigningKey(getSignKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    // =========================
    // Check Expiration
    // =========================
    private boolean isTokenExpired(String token) {
        return extractAllClaims(token)
                .getExpiration()
                .before(new Date());
    }

    // =========================
    // Validate Token
    // =========================
    public boolean isTokenValid(String token, String email) {

        final String tokenEmail = extractEmail(token);

        return (tokenEmail.equals(email) && !isTokenExpired(token));
    }

    // Optional simple validation
    public boolean isTokenValid(String token) {

        try {
            return !isTokenExpired(token);
        } catch (Exception e) {
            return false;
        }
    }
}
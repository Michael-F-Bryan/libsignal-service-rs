use crate::envelope::{CIPHER_KEY_SIZE, MAC_KEY_SIZE};

#[derive(Clone)]
pub struct ServiceConfiguration {
    pub service_urls: Vec<String>,
    pub cdn_urls: Vec<String>,
    pub contact_discovery_url: Vec<String>,
    pub certificate_authority: String,
}

#[derive(Clone)]
pub struct Credentials {
    pub uuid: Option<String>,
    pub e164: String,
    pub password: Option<String>,

    pub signaling_key: [u8; CIPHER_KEY_SIZE + MAC_KEY_SIZE],
}

impl Credentials {
    /// Kind-of equivalent with `PushServiceSocket::getAuthorizationHeader`
    ///
    /// None when `self.password == None`
    pub fn authorization(&self) -> Option<(&str, &str)> {
        let identifier = self.login();
        Some((identifier, self.password.as_ref()?))
    }

    pub fn login(&self) -> &str {
        if let Some(uuid) = self.uuid.as_ref() {
            uuid
        } else {
            &self.e164
        }
    }
}

pub const ROOT_CA: &str = r#"-----BEGIN CERTIFICATE-----
MIID7zCCAtegAwIBAgIJAIm6LatK5PNiMA0GCSqGSIb3DQEBBQUAMIGNMQswCQYDVQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzEdMBsGA1UECgwUT3BlbiBXaGlzcGVyIFN5c3RlbXMxHTAbBgNVBAsMFE9wZW4gV2hpc3BlciBTeXN0ZW1zMRMwEQYDVQQDDApUZXh0U2VjdXJlMB4XDTEzMDMyNTIyMTgzNVoXDTIzMDMyMzIyMTgzNVowgY0xCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMRYwFAYDVQQHDA1TYW4gRnJhbmNpc2NvMR0wGwYDVQQKDBRPcGVuIFdoaXNwZXIgU3lzdGVtczEdMBsGA1UECwwUT3BlbiBXaGlzcGVyIFN5c3RlbXMxEzARBgNVBAMMClRleHRTZWN1cmUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDBSWBpOCBDF0i4q2d4jAXkSXUGpbeWugVPQCjaL6qD9QDOxeW1afvfPo863i6Crq1KDxHpB36EwzVcjwLkFTIMeo7t9s1FQolAt3mErV2U0vie6Ves+yj6grSfxwIDAcdsKmI0a1SQCZlr3Q1tcHAkAKFRxYNawADyps5B+Zmqcgf653TXS5/0IPPQLocLn8GWLwOYNnYfBvILKDMItmZTtEbucdigxEA9mfIvvHADEbteLtVgwBm9R5vVvtwrD6CCxI3pgH7EH7kMP0Od93wLisvn1yhHY7FuYlrkYqdkMvWUrKoASVw4jb69vaeJCUdU+HCoXOSP1PQcL6WenNCHAgMBAAGjUDBOMB0GA1UdDgQWBBQBixjxP/s5GURuhYa+lGUypzI8kDAfBgNVHSMEGDAWgBQBixjxP/s5GURuhYa+lGUypzI8kDAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBBQUAA4IBAQB+Hr4hC56m0LvJAu1RK6NuPDbTMEN7/jMojFHxH4P3XPFfupjR+bkDq0pPOU6JjIxnrD1XD/EVmTTaTVY5iOheyv7UzJOefb2pLOc9qsuvI4fnaESh9bhzln+LXxtCrRPGhkxA1IMIo3J/s2WF/KVYZyciu6b4ubJ91XPAuBNZwImug7/srWvbpk0hq6A6z140WTVSKtJG7EP41kJe/oF4usY5J7LPkxK3LWzMJnb5EIJDmRvyH8pyRwWg6Qm6qiGFaI4nL8QU4La1x2en4DGXRaLMPRwjELNgQPodR38zoCMuA8gHZfZYYoZ7D7Q1wNUiVHcxuFrEeBaYJbLErwLV
-----END CERTIFICATE-----"#;

impl Default for ServiceConfiguration {
    fn default() -> ServiceConfiguration {
        ServiceConfiguration {
            service_urls: vec![
                "https://textsecure-service-staging.whispersystems.org".into(),
            ],
            cdn_urls: vec![
                "https://cdn-staging.signal.org".into(),
                "https://cdn2-staging.signal.org".into(),
            ],
            contact_discovery_url: vec![], // TODO: add this one
            certificate_authority: ROOT_CA.into(),
        }
    }
}

impl ServiceConfiguration {
    // configuration with the Signal API staging endpoints
    // see: https://github.com/signalapp/Signal-Desktop/blob/master/config/default.json
    pub fn staging() {
        Default::default()
    }

    // configuration with the Signal API production endpoints
    // https://github.com/signalapp/Signal-Desktop/blob/master/config/production.json
    pub fn production() -> ServiceConfiguration {
        ServiceConfiguration {
            service_urls: vec![
                "https://textsecure-service.whispersystems.org".into()
            ],
            cdn_urls: vec![
                "https://cdn.signal.org".into(),
                "https://cdn2.signal.org".into(),
            ],
            ..Default::default()
        }
    }
}

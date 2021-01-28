(function() {var implementors = {};
implementors["libsignal_service"] = [{"text":"impl&lt;Service&gt; Freeze for AccountManager&lt;Service&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Service: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for ServiceAddress","synthetic":true,"types":[]},{"text":"impl Freeze for AttachmentCipherError","synthetic":true,"types":[]},{"text":"impl Freeze for ServiceCipher","synthetic":true,"types":[]},{"text":"impl Freeze for ServiceConfiguration","synthetic":true,"types":[]},{"text":"impl Freeze for Credentials","synthetic":true,"types":[]},{"text":"impl Freeze for SignalServers","synthetic":true,"types":[]},{"text":"impl Freeze for Reaction","synthetic":true,"types":[]},{"text":"impl Freeze for AttachmentPointer","synthetic":true,"types":[]},{"text":"impl Freeze for CallMessage","synthetic":true,"types":[]},{"text":"impl Freeze for DataMessage","synthetic":true,"types":[]},{"text":"impl Freeze for GroupContext","synthetic":true,"types":[]},{"text":"impl Freeze for GroupContextV2","synthetic":true,"types":[]},{"text":"impl Freeze for ReceiptMessage","synthetic":true,"types":[]},{"text":"impl Freeze for SyncMessage","synthetic":true,"types":[]},{"text":"impl Freeze for TypingMessage","synthetic":true,"types":[]},{"text":"impl Freeze for Metadata","synthetic":true,"types":[]},{"text":"impl Freeze for Content","synthetic":true,"types":[]},{"text":"impl Freeze for Flags","synthetic":true,"types":[]},{"text":"impl Freeze for Flags","synthetic":true,"types":[]},{"text":"impl Freeze for Type","synthetic":true,"types":[]},{"text":"impl Freeze for ContentBody","synthetic":true,"types":[]},{"text":"impl Freeze for Sent","synthetic":true,"types":[]},{"text":"impl Freeze for Contacts","synthetic":true,"types":[]},{"text":"impl Freeze for Groups","synthetic":true,"types":[]},{"text":"impl Freeze for Blocked","synthetic":true,"types":[]},{"text":"impl Freeze for Request","synthetic":true,"types":[]},{"text":"impl Freeze for Read","synthetic":true,"types":[]},{"text":"impl Freeze for Configuration","synthetic":true,"types":[]},{"text":"impl Freeze for StickerPackOperation","synthetic":true,"types":[]},{"text":"impl Freeze for ViewOnceOpen","synthetic":true,"types":[]},{"text":"impl Freeze for FetchLatest","synthetic":true,"types":[]},{"text":"impl Freeze for Keys","synthetic":true,"types":[]},{"text":"impl Freeze for MessageRequestResponse","synthetic":true,"types":[]},{"text":"impl Freeze for UnidentifiedDeliveryStatus","synthetic":true,"types":[]},{"text":"impl Freeze for Type","synthetic":true,"types":[]},{"text":"impl Freeze for Type","synthetic":true,"types":[]},{"text":"impl Freeze for Type","synthetic":true,"types":[]},{"text":"impl Freeze for Type","synthetic":true,"types":[]},{"text":"impl Freeze for Envelope","synthetic":true,"types":[]},{"text":"impl Freeze for EnvelopeEntity","synthetic":true,"types":[]},{"text":"impl Freeze for WebSocketMessage","synthetic":true,"types":[]},{"text":"impl Freeze for WebSocketRequestMessage","synthetic":true,"types":[]},{"text":"impl Freeze for WebSocketResponseMessage","synthetic":true,"types":[]},{"text":"impl&lt;WS&gt; Freeze for MessagePipe&lt;WS&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;WS: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;WS as WebSocketService&gt;::Stream: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for PanicingWebSocketService","synthetic":true,"types":[]},{"text":"impl !Freeze for WebSocketStreamItem","synthetic":true,"types":[]},{"text":"impl Freeze for Type","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Freeze for Attachment&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Group","synthetic":true,"types":[]},{"text":"impl Freeze for Message","synthetic":true,"types":[]},{"text":"impl Freeze for PreKeyEntity","synthetic":true,"types":[]},{"text":"impl Freeze for SignedPreKeyEntity","synthetic":true,"types":[]},{"text":"impl Freeze for SignedPreKey","synthetic":true,"types":[]},{"text":"impl Freeze for PreKeyState","synthetic":true,"types":[]},{"text":"impl Freeze for ProvisionEnvelope","synthetic":true,"types":[]},{"text":"impl Freeze for ProvisionMessage","synthetic":true,"types":[]},{"text":"impl Freeze for ProvisioningVersion","synthetic":true,"types":[]},{"text":"impl Freeze for ProvisioningCipher","synthetic":true,"types":[]},{"text":"impl&lt;WS&gt; Freeze for ProvisioningPipe&lt;WS&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;WS: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;WS as WebSocketService&gt;::Stream: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for ProvisioningError","synthetic":true,"types":[]},{"text":"impl Freeze for ProvisioningStep","synthetic":true,"types":[]},{"text":"impl Freeze for DeviceId","synthetic":true,"types":[]},{"text":"impl Freeze for DeviceInfo","synthetic":true,"types":[]},{"text":"impl Freeze for ConfirmDeviceMessage","synthetic":true,"types":[]},{"text":"impl Freeze for ConfirmCodeMessage","synthetic":true,"types":[]},{"text":"impl Freeze for DeviceCapabilities","synthetic":true,"types":[]},{"text":"impl Freeze for ProfileKey","synthetic":true,"types":[]},{"text":"impl Freeze for PreKeyStatus","synthetic":true,"types":[]},{"text":"impl Freeze for ConfirmCodeResponse","synthetic":true,"types":[]},{"text":"impl Freeze for PreKeyResponse","synthetic":true,"types":[]},{"text":"impl Freeze for WhoAmIResponse","synthetic":true,"types":[]},{"text":"impl Freeze for PreKeyResponseItem","synthetic":true,"types":[]},{"text":"impl Freeze for MismatchedDevices","synthetic":true,"types":[]},{"text":"impl Freeze for StaleDevices","synthetic":true,"types":[]},{"text":"impl Freeze for CdnUploadAttributes","synthetic":true,"types":[]},{"text":"impl Freeze for AttachmentV2UploadAttributes","synthetic":true,"types":[]},{"text":"impl Freeze for SmsVerificationCodeResponse","synthetic":true,"types":[]},{"text":"impl Freeze for VoiceVerificationCodeResponse","synthetic":true,"types":[]},{"text":"impl Freeze for ServiceError","synthetic":true,"types":[]},{"text":"impl&lt;Service&gt; Freeze for MessageReceiver&lt;Service&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Service: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for MessageReceiverError","synthetic":true,"types":[]},{"text":"impl Freeze for UnidentifiedAccessPair","synthetic":true,"types":[]},{"text":"impl Freeze for UnidentifiedAccess","synthetic":true,"types":[]},{"text":"impl Freeze for UnidentifiedSenderMessageContent","synthetic":true,"types":[]},{"text":"impl Freeze for SenderCertificate","synthetic":true,"types":[]},{"text":"impl Freeze for ServerCertificate","synthetic":true,"types":[]},{"text":"impl Freeze for CertificateValidator","synthetic":true,"types":[]},{"text":"impl Freeze for SealedSessionError","synthetic":true,"types":[]},{"text":"impl Freeze for MacError","synthetic":true,"types":[]},{"text":"impl Freeze for OutgoingPushMessage","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for OutgoingPushMessages&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for SendMessageResponse","synthetic":true,"types":[]},{"text":"impl Freeze for SendMessageResult","synthetic":true,"types":[]},{"text":"impl Freeze for AttachmentSpec","synthetic":true,"types":[]},{"text":"impl&lt;Service&gt; Freeze for MessageSender&lt;Service&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Service: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for AttachmentUploadError","synthetic":true,"types":[]},{"text":"impl Freeze for MessageSenderError","synthetic":true,"types":[]}];
implementors["libsignal_service_actix"] = [{"text":"impl Freeze for AwcPushService","synthetic":true,"types":[]},{"text":"impl Freeze for AwcWebSocket","synthetic":true,"types":[]},{"text":"impl !Freeze for AwcWebSocketError","synthetic":true,"types":[]},{"text":"impl Freeze for SecondaryDeviceProvisioning","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
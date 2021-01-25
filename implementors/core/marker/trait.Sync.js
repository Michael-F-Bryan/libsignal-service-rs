(function() {var implementors = {};
implementors["libsignal_service"] = [{"text":"impl&lt;Service&gt; !Sync for AccountManager&lt;Service&gt;","synthetic":true,"types":[]},{"text":"impl Sync for ServiceAddress","synthetic":true,"types":[]},{"text":"impl Sync for AttachmentCipherError","synthetic":true,"types":[]},{"text":"impl !Sync for ServiceCipher","synthetic":true,"types":[]},{"text":"impl Sync for ServiceConfiguration","synthetic":true,"types":[]},{"text":"impl Sync for Credentials","synthetic":true,"types":[]},{"text":"impl Sync for SignalServers","synthetic":true,"types":[]},{"text":"impl Sync for Reaction","synthetic":true,"types":[]},{"text":"impl Sync for AttachmentPointer","synthetic":true,"types":[]},{"text":"impl Sync for CallMessage","synthetic":true,"types":[]},{"text":"impl Sync for DataMessage","synthetic":true,"types":[]},{"text":"impl Sync for GroupContext","synthetic":true,"types":[]},{"text":"impl Sync for GroupContextV2","synthetic":true,"types":[]},{"text":"impl Sync for ReceiptMessage","synthetic":true,"types":[]},{"text":"impl Sync for SyncMessage","synthetic":true,"types":[]},{"text":"impl Sync for TypingMessage","synthetic":true,"types":[]},{"text":"impl Sync for Metadata","synthetic":true,"types":[]},{"text":"impl Sync for Content","synthetic":true,"types":[]},{"text":"impl Sync for Flags","synthetic":true,"types":[]},{"text":"impl Sync for Flags","synthetic":true,"types":[]},{"text":"impl Sync for Type","synthetic":true,"types":[]},{"text":"impl Sync for ContentBody","synthetic":true,"types":[]},{"text":"impl Sync for Sent","synthetic":true,"types":[]},{"text":"impl Sync for Contacts","synthetic":true,"types":[]},{"text":"impl Sync for Groups","synthetic":true,"types":[]},{"text":"impl Sync for Blocked","synthetic":true,"types":[]},{"text":"impl Sync for Request","synthetic":true,"types":[]},{"text":"impl Sync for Read","synthetic":true,"types":[]},{"text":"impl Sync for Configuration","synthetic":true,"types":[]},{"text":"impl Sync for StickerPackOperation","synthetic":true,"types":[]},{"text":"impl Sync for ViewOnceOpen","synthetic":true,"types":[]},{"text":"impl Sync for FetchLatest","synthetic":true,"types":[]},{"text":"impl Sync for Keys","synthetic":true,"types":[]},{"text":"impl Sync for MessageRequestResponse","synthetic":true,"types":[]},{"text":"impl Sync for UnidentifiedDeliveryStatus","synthetic":true,"types":[]},{"text":"impl Sync for Type","synthetic":true,"types":[]},{"text":"impl Sync for Type","synthetic":true,"types":[]},{"text":"impl Sync for Type","synthetic":true,"types":[]},{"text":"impl Sync for Type","synthetic":true,"types":[]},{"text":"impl Sync for Envelope","synthetic":true,"types":[]},{"text":"impl Sync for EnvelopeEntity","synthetic":true,"types":[]},{"text":"impl Sync for WebSocketMessage","synthetic":true,"types":[]},{"text":"impl Sync for WebSocketRequestMessage","synthetic":true,"types":[]},{"text":"impl Sync for WebSocketResponseMessage","synthetic":true,"types":[]},{"text":"impl&lt;WS&gt; Sync for MessagePipe&lt;WS&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;WS: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;WS as WebSocketService&gt;::Stream: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for PanicingWebSocketService","synthetic":true,"types":[]},{"text":"impl Sync for WebSocketStreamItem","synthetic":true,"types":[]},{"text":"impl Sync for Type","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Sync for Attachment&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Group","synthetic":true,"types":[]},{"text":"impl Sync for Message","synthetic":true,"types":[]},{"text":"impl Sync for PreKeyEntity","synthetic":true,"types":[]},{"text":"impl Sync for SignedPreKeyEntity","synthetic":true,"types":[]},{"text":"impl !Sync for SignedPreKey","synthetic":true,"types":[]},{"text":"impl !Sync for PreKeyState","synthetic":true,"types":[]},{"text":"impl !Sync for ProvisioningCipher","synthetic":true,"types":[]},{"text":"impl&lt;WS&gt; !Sync for ProvisioningPipe&lt;WS&gt;","synthetic":true,"types":[]},{"text":"impl Sync for ProvisioningError","synthetic":true,"types":[]},{"text":"impl Sync for ProvisioningStep","synthetic":true,"types":[]},{"text":"impl Sync for DeviceId","synthetic":true,"types":[]},{"text":"impl Sync for DeviceInfo","synthetic":true,"types":[]},{"text":"impl Sync for ConfirmDeviceMessage","synthetic":true,"types":[]},{"text":"impl Sync for ConfirmCodeMessage","synthetic":true,"types":[]},{"text":"impl Sync for DeviceCapabilities","synthetic":true,"types":[]},{"text":"impl Sync for ProfileKey","synthetic":true,"types":[]},{"text":"impl Sync for PreKeyStatus","synthetic":true,"types":[]},{"text":"impl Sync for ConfirmCodeResponse","synthetic":true,"types":[]},{"text":"impl Sync for PreKeyResponse","synthetic":true,"types":[]},{"text":"impl Sync for WhoAmIResponse","synthetic":true,"types":[]},{"text":"impl Sync for PreKeyResponseItem","synthetic":true,"types":[]},{"text":"impl Sync for MismatchedDevices","synthetic":true,"types":[]},{"text":"impl Sync for StaleDevices","synthetic":true,"types":[]},{"text":"impl Sync for CdnUploadAttributes","synthetic":true,"types":[]},{"text":"impl Sync for AttachmentV2UploadAttributes","synthetic":true,"types":[]},{"text":"impl Sync for SmsVerificationCodeResponse","synthetic":true,"types":[]},{"text":"impl Sync for VoiceVerificationCodeResponse","synthetic":true,"types":[]},{"text":"impl Sync for ServiceError","synthetic":true,"types":[]},{"text":"impl&lt;Service&gt; Sync for MessageReceiver&lt;Service&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Service: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for MessageReceiverError","synthetic":true,"types":[]},{"text":"impl !Sync for UnidentifiedAccessPair","synthetic":true,"types":[]},{"text":"impl !Sync for UnidentifiedAccess","synthetic":true,"types":[]},{"text":"impl !Sync for UnidentifiedSenderMessageContent","synthetic":true,"types":[]},{"text":"impl !Sync for SenderCertificate","synthetic":true,"types":[]},{"text":"impl !Sync for ServerCertificate","synthetic":true,"types":[]},{"text":"impl !Sync for CertificateValidator","synthetic":true,"types":[]},{"text":"impl Sync for SealedSessionError","synthetic":true,"types":[]},{"text":"impl Sync for MacError","synthetic":true,"types":[]},{"text":"impl Sync for OutgoingPushMessage","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for OutgoingPushMessages&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for SendMessageResponse","synthetic":true,"types":[]},{"text":"impl Sync for AttachmentSpec","synthetic":true,"types":[]},{"text":"impl&lt;Service&gt; !Sync for MessageSender&lt;Service&gt;","synthetic":true,"types":[]},{"text":"impl Sync for AttachmentUploadError","synthetic":true,"types":[]},{"text":"impl Sync for MessageSenderError","synthetic":true,"types":[]}];
implementors["libsignal_service_actix"] = [{"text":"impl !Sync for AwcPushService","synthetic":true,"types":[]},{"text":"impl !Sync for AwcWebSocket","synthetic":true,"types":[]},{"text":"impl !Sync for AwcWebSocketError","synthetic":true,"types":[]},{"text":"impl !Sync for SecondaryDeviceProvisioning","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
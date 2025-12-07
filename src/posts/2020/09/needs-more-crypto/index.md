---
title: "Needs More Crypto"
date: 2020-09-21
---

Various problems that could be solved by the application of cryptography

## Phone Spam and Scams

The problem of phone spam is not knowing that the caller is who they say they are. We already have solved this problem on the web. It's the same problem as knowing that you're getting your bank website and not some hacker. Usually when web security is explained to lay people, the focus is on the fact that traffic is encrypted to prevent eavesdropping. Of course this is important since web traffic hops across many untrusted routers and servers between its origin and destination. But what is also crucial is knowing that the destination is who you want it to be. Encryption alone only guarantees that you are being hacked by no more than one hacker.

Phone calls need to be initiated over a protocol that validates cryptographic certificates to confirm that the other party is who they say they are.

This would solve both the problem of spammers bugging regular people and also scammers imitating customers to businesses. I had an experience the other day where I called my credit card customer service and as soon as I connected to a person the call dropped. This happened twice. I suspect they thought I was a scammer because I was at the time logged into my account on my work computer. My work computer is on a VPN which I've heard sometimes routes our traffic through India, probably related to the fact we have a team in Bangalore.

If my phone had a trusted certificate, my bank could have more confidence that it was me calling.

## Transferring Medical Data

I had a bothersome time recently getting new glasses. I didn't want to buy into the Luxotica cartel, so I used a popular startup. To get my prescription they offered to call my eye doctor themselves. The eye doctor tried to fax it over but that failed for whatever reason. I'm not sure why I can't be trusted to relay my prescription to the eye glass store. But let's assume there's a good reason. My prescription could have been sent using PGP encrypted email. And I wouldn't have to ask my eye doctor to send the prescription to the store. They could send it to me, along with their PGP signature that references a public key on the popular key-servers. This would validate that the prescription wasn't altered by me or any other intermediary. I'm not sure how this works with HIPAA compliance, but I don't know of a good reason this wouldn't work. There's just the bad reason that the secure email market is dominated by non-interoperable proprietary solutions.

## Resumes

> Study: Job Applicants With 4-Year College Degree Just As Successful As Those Who Lie About Having 4-Year College Degree
> 
> [The Onion](https://www.theonion.com/study-job-applicants-with-4-year-college-degree-just-a-1844911814)

I don't know how real of a problem this is, applicants lying about degrees or experience on their resumes, but I can imagine a cryptographic solution. That would be a digital resume format which contains for each employer, a cryptographic signature for that portion of your resume. When checking the references for a candidate, a prospective employer can call up previous employers to verify dates of employment. But we can cut out the manual steps. This can be done the same way certificate-based digital signatures work with PDFs with the only difference being that instead of one signature validating the whole document, we'd have multiple different signatures, each validating only a portion of the document. The infrastructure costs could be minimal if public keys are hosted on the traditional networks of key-servers used with PGP.

import type { ILdapConfig, ILdapSyncData } from '@/Interface';
import type { IRestApiContext } from '@n8n/rest-api-client';
import { makeRestApiRequest } from '@n8n/rest-api-client';
import type { IDataObject } from 'n8n-workflow';

export async function getLdapConfig(context: IRestApiContext): Promise<ILdapConfig> {
	return await makeRestApiRequest(context, 'GET', '/ldap/config');
}

export async function testLdapConnection(context: IRestApiContext): Promise<{}> {
	return await makeRestApiRequest(context, 'POST', '/ldap/test-connection');
}

export async function updateLdapConfig(
	context: IRestApiContext,
	adConfig: ILdapConfig,
): Promise<ILdapConfig> {
	return await makeRestApiRequest(
		context,
		'PUT',
		'/ldap/config',
		adConfig as unknown as IDataObject,
	);
}

export async function runLdapSync(context: IRestApiContext, data: IDataObject): Promise<{}> {
	return await makeRestApiRequest(context, 'POST', '/ldap/sync', data as unknown as IDataObject);
}

export async function getLdapSynchronizations(
	context: IRestApiContext,
	pagination: { page: number },
): Promise<ILdapSyncData[]> {
	return await makeRestApiRequest(context, 'GET', '/ldap/sync', pagination);
}

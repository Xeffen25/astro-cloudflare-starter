export async function GET() {
	return new Response(
		`<?xml version="1.0" encoding="utf-8"?>
        <browserconfig>
            <msapplication>
                <tile>
                    <square70x70logo src="/icons/mstile-70x70.png"/>
                    <square150x150logo src="/icons/mstile-150x150.png"/>
                    <square310x310logo src="/icons/mstile-310x310.png"/>
                    <wide310x150logo src="/icons/mstile-310x150.png"/>
                    <TileColor>#cc0000</TileColor>
                </tile>
            </msapplication>
        </browserconfig>`,
		{
			status: 200,
			headers: {
				"Content-Type": "text/xml",
			},
		},
	);
}

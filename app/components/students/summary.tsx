import { Dialog, List } from "antd-mobile";

export default function Summary() {
  return (
    <List mode="card" style={{ marginTop: "0px" }}>
      <List.Item>
        <div className="flex flex-col w-full text-center">
          <div className="flex flex-row">
            <div className="w-1/2 flex flex-col ml-8">
              <div className="h-1/3 text-sm">Sum</div>
              <div className="h-2/3  text-2xl">10</div>
            </div>
            <div
              className="w-1/2 flex flex-col mr-8"
              onClick={() => {
                Dialog.show({
                  title: (
                    <div>
                      <div>Tips</div>
                      <div className="font-thin">
                        It means how many student you have classes with in the
                        feature.
                      </div>
                    </div>
                  ),
                  closeOnMaskClick: true,
                });
              }}
            >
              <div className="h-1/3 text-sm">Actice</div>
              <div className="h-2/3 text-2xl">6</div>
            </div>
          </div>
        </div>
      </List.Item>
    </List>
  );
}

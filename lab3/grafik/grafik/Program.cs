using grafik;
using OpenTK.Mathematics;
using OpenTK.Windowing.Common;
using OpenTK.Windowing.Desktop;

var nSettings = new NativeWindowSettings()
{
    ClientSize = new Vector2i(800, 600),
    Title = "Grafik",
    WindowState = WindowState.Normal,
    Flags = ContextFlags.Default,
    Profile = ContextProfile.Compatability,
    StartFocused = true,
    StartVisible = true
};

var myWindow = new MyWindow(nSettings);
myWindow.Run();